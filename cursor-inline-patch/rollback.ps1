#Requires -Version 5.1
param(
    [string]$BackupPath = "",
    [string]$CursorRoot = ""
)

$ErrorActionPreference = "Stop"

$PatchStart = "<!-- !! MARKDOWN-TASK-LIST-PATCH-START !! -->"
$PatchEnd = "<!-- !! MARKDOWN-TASK-LIST-PATCH-END !! -->"
$BackupRoot = Join-Path $env:LOCALAPPDATA "Cursor\markdown-task-list-patch-backups"

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

function Get-LatestCleanBackup {
    if (-not (Test-Path $BackupRoot)) {
        return $null
    }

    $backups = Get-ChildItem -Path $BackupRoot -Directory |
        Sort-Object Name -Descending |
        ForEach-Object {
            Join-Path $_.FullName "workbench.html"
        } |
        Where-Object { Test-Path $_ }

    foreach ($backupHtml in $backups) {
        $content = Get-Content -Path $backupHtml -Raw -Encoding UTF8
        if ($content -notmatch [regex]::Escape($PatchStart)) {
            return $backupHtml
        }
    }

    return $backups | Select-Object -First 1
}

function Restore-Workbench {
    param(
        [string]$Root,
        [string]$BackupHtml
    )

    $workbenchDir = Join-Path $Root "resources\app\out\vs\code\electron-sandbox\workbench"
    $targetHtml = Join-Path $workbenchDir "workbench.html"

    if (-not (Test-Path $targetHtml)) {
        return
    }

    Copy-Item -Path $BackupHtml -Destination $targetHtml -Force
    Remove-Item -Path (Join-Path $workbenchDir "task-list-patch.js") -ErrorAction SilentlyContinue
    Remove-Item -Path (Join-Path $workbenchDir "task-list-patch.css") -ErrorAction SilentlyContinue

    Write-Host "Restored $targetHtml"
    Write-Host "Removed task-list-patch.js/css if present."
}

$backup = $BackupPath
if (-not $backup) {
    $backup = Get-LatestCleanBackup
}

if (-not $backup -or -not (Test-Path $backup)) {
    throw "No backup found. Pass -BackupPath explicitly or run patch.ps1 first."
}

$restored = $false
foreach ($root in Get-CursorInstallCandidates -PreferredRoot $CursorRoot) {
    Restore-Workbench -Root $root -BackupHtml $backup
    $restored = $true
}

if (-not $restored) {
    throw "No Cursor install found to restore."
}

Write-Host "Rollback complete from: $backup"
Write-Host "Reload Cursor with Developer: Reload Window."
