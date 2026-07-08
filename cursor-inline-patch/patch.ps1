#Requires -Version 5.1
param(
    [string]$CursorRoot = "",
    [switch]$WhatIf
)

$ErrorActionPreference = "Stop"

$PatchStart = "<!-- !! MARKDOWN-TASK-LIST-PATCH-START !! -->"
$PatchEnd = "<!-- !! MARKDOWN-TASK-LIST-PATCH-END !! -->"
$RepoRoot = Split-Path -Parent $PSScriptRoot
$SourceJs = Join-Path $PSScriptRoot "task-list-patch.js"
$SourceCss = Join-Path $PSScriptRoot "task-list-patch.css"
$BackupRoot = Join-Path $env:LOCALAPPDATA "Cursor\markdown-task-list-patch-backups"
$VersionStamp = Get-Date -Format "yyyyMMdd-HHmmss"

function Get-CursorInstallCandidates {
    param([string]$PreferredRoot)

    $results = @()
    $seen = @{}

    $candidates = @()
    if ($PreferredRoot) {
        $candidates += $PreferredRoot
    }

    $candidates += @(
        (Join-Path ${env:ProgramFiles} "cursor"),
        (Join-Path ${env:ProgramFiles} "Cursor"),
        (Join-Path $env:LOCALAPPDATA "Programs\cursor"),
        (Join-Path $env:LOCALAPPDATA "Programs\Cursor")
    )

    foreach ($path in $candidates) {
        if (-not $path) { continue }
        $full = [System.IO.Path]::GetFullPath($path)
        if ($seen.ContainsKey($full)) { continue }
        $seen[$full] = $true
        if (Test-Path $full) {
            $results += $full
        }
    }

    return $results
}

function Get-WorkbenchPaths {
    param([string]$Root)

    $workbenchDir = Join-Path $Root "resources\app\out\vs\code\electron-sandbox\workbench"
    return @{
        Root = $Root
        Dir = $workbenchDir
        Html = Join-Path $workbenchDir "workbench.html"
        Js = Join-Path $workbenchDir "task-list-patch.js"
        Css = Join-Path $workbenchDir "task-list-patch.css"
    }
}

function New-PatchBlock {
    param([string]$Version)
    return @"
$PatchStart
<link rel="stylesheet" href="./task-list-patch.css?v=$Version" />
<script src="./task-list-patch.js?v=$Version"></script>
$PatchEnd
"@
}

function Install-PatchForCursor {
    param($Paths)

    if (-not (Test-Path $Paths.Html)) {
        throw "workbench.html not found: $($Paths.Html)"
    }

    $html = Get-Content -Path $Paths.Html -Raw -Encoding UTF8
    $patchBlock = New-PatchBlock -Version $VersionStamp

    if ($html -match [regex]::Escape($PatchStart)) {
        $pattern = [regex]::Escape($PatchStart) + "[\s\S]*?" + [regex]::Escape($PatchEnd)
        $html = [regex]::Replace($html, $pattern, $patchBlock)
        $action = "Updated"
    }
    else {
        if ($html -notmatch "</head>") {
            throw "Could not find </head> in workbench.html"
        }
        $html = $html -replace "</head>", "$patchBlock`r`n</head>"
        $action = "Installed"
    }

    if (-not (Test-Path $BackupRoot)) {
        New-Item -ItemType Directory -Path $BackupRoot | Out-Null
    }

    $backupDir = Join-Path $BackupRoot ("cursor-" + $VersionStamp)
    New-Item -ItemType Directory -Path $backupDir | Out-Null

    if ($html -notmatch [regex]::Escape($PatchStart)) {
        Copy-Item -Path $Paths.Html -Destination (Join-Path $backupDir "workbench.html") -Force
    }

    if ($WhatIf) {
        Write-Host "[WhatIf] $action patch for $($Paths.Root)"
        Write-Host "[WhatIf] Would copy JS/CSS into $($Paths.Dir)"
        Write-Host "[WhatIf] Would update $($Paths.Html)"
        Write-Host "[WhatIf] Backup would be $backupDir"
        return
    }

    Copy-Item -Path $SourceJs -Destination $Paths.Js -Force
    Copy-Item -Path $SourceCss -Destination $Paths.Css -Force
    Set-Content -Path $Paths.Html -Value $html -Encoding UTF8 -NoNewline

    Write-Host "$action markdown task list patch."
    Write-Host "Cursor root: $($Paths.Root)"
    Write-Host "Patched file: $($Paths.Html)"
    Write-Host "Backup: $backupDir"
    Write-Host "Reload Cursor with Developer: Reload Window."
}

if (-not (Test-Path $SourceJs)) {
    throw "Missing patch asset: $SourceJs"
}
if (-not (Test-Path $SourceCss)) {
    throw "Missing patch asset: $SourceCss"
}

$installed = $false
foreach ($root in Get-CursorInstallCandidates -PreferredRoot $CursorRoot) {
    $paths = Get-WorkbenchPaths -Root $root
    if (-not (Test-Path $paths.Html)) {
        continue
    }

    Install-PatchForCursor -Paths $paths
    $installed = $true
}

if (-not $installed) {
    throw "No Cursor workbench.html found. Pass -CursorRoot with your Cursor install path."
}
