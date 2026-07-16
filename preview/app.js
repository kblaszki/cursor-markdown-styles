(async () => {
  const FIXTURES = window.PREVIEW_FIXTURES;
  const EMBEDDED_MARKDOWN = window.PREVIEW_EMBEDDED_MARKDOWN;

  const PRESETS = {
    "cpp-modern": {
      label: "C++ Modern",
      tokens: {
        pageBg: "#1f1f1f",
        panelBg: "#2b2b2b",
        textColor: "#d4d4d4",
        mutedColor: "#9d9d9d",
        borderColor: "#3c3c3c",
        accentColor: "#4ec9b0",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.7,
        headingColor: "#4ec9b0",
        linkColor: "#4daafc",
        blockquoteBorder: "#0078d4",
        blockquoteBg: "#252a31",
        inlineCodeText: "#9cdcfe",
        inlineCodeBg: "#3c3c3c",
        codeBlockText: "#d4d4d4",
        codeBlockBg: "#252526",
        codeBlockBorder: "#3c3c3c",
        tableHeaderBg: "#333333",
        listMarkerColor: "#4ec9b0",
        ruleColor: "#3c3c3c",
      },
      customCss: "",
    },
    "cpp-modern-light": {
      label: "C++ Modern Light",
      tokens: {
        pageBg: "#f7f9fc",
        panelBg: "#eef4f8",
        textColor: "#203040",
        mutedColor: "#5f7284",
        borderColor: "#c8d5df",
        accentColor: "#0e7490",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.78,
        headingColor: "#0e7490",
        linkColor: "#0f5fd7",
        blockquoteBorder: "#2563eb",
        blockquoteBg: "#eef4f8",
        inlineCodeText: "#0f5fd7",
        inlineCodeBg: "#e8eef5",
        codeBlockText: "#16324a",
        codeBlockBg: "#ffffff",
        codeBlockBorder: "#c8d5df",
        tableHeaderBg: "#eef4f8",
        listMarkerColor: "#0e7490",
        ruleColor: "#c8d5df",
      },
      customCss: "",
    },
    studio: {
      label: "Studio",
      tokens: {
        pageBg: "#f5f6f8",
        panelBg: "#e9edf3",
        textColor: "#1c2330",
        mutedColor: "#5c6778",
        borderColor: "#c9d1dc",
        accentColor: "#2f6fed",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.8,
        headingColor: "#2f6fed",
        linkColor: "#1d5fd0",
        blockquoteBorder: "#0f7a8a",
        blockquoteBg: "#e9edf3",
        inlineCodeText: "#1a56b8",
        inlineCodeBg: "#e4eaf3",
        codeBlockText: "#1a2230",
        codeBlockBg: "#eef2f7",
        codeBlockBorder: "#b8c4d4",
        tableHeaderBg: "#e9edf3",
        listMarkerColor: "#2f6fed",
        ruleColor: "#c9d1dc",
      },
      customCss: "",
    },
    lumina: {
      label: "Lumina",
      tokens: {
        pageBg: "#0f1320",
        panelBg: "#141b2d",
        textColor: "#d9e6ff",
        mutedColor: "#8fa7d8",
        borderColor: "#2a3a62",
        accentColor: "#69b7ff",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.72,
        headingColor: "#7fd6ff",
        linkColor: "#8fe4ff",
        blockquoteBorder: "#5e9bff",
        blockquoteBg: "#162238",
        inlineCodeText: "#98e7ff",
        inlineCodeBg: "#1d2940",
        codeBlockText: "#dce9ff",
        codeBlockBg: "#121b2d",
        codeBlockBorder: "#294267",
        tableHeaderBg: "#18253c",
        listMarkerColor: "#7fd6ff",
        ruleColor: "#284168",
      },
      customCss: "",
    },
    "lumina-light": {
      label: "Lumina Light",
      tokens: {
        pageBg: "#f5f9ff",
        panelBg: "#ebf3ff",
        textColor: "#173052",
        mutedColor: "#60799b",
        borderColor: "#c8d8f5",
        accentColor: "#0ea5e9",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.75,
        headingColor: "#0ea5e9",
        linkColor: "#2563eb",
        blockquoteBorder: "#2563eb",
        blockquoteBg: "#eef5ff",
        inlineCodeText: "#155e75",
        inlineCodeBg: "#e7efff",
        codeBlockText: "#173052",
        codeBlockBg: "#fbfdff",
        codeBlockBorder: "#c8d8f5",
        tableHeaderBg: "#edf5ff",
        listMarkerColor: "#0891b2",
        ruleColor: "#c9d8ef",
      },
      customCss: "",
    },
    graphite: {
      label: "Graphite",
      tokens: {
        pageBg: "#171616",
        panelBg: "#221f1d",
        textColor: "#ddd6cf",
        mutedColor: "#a59a90",
        borderColor: "#4b423d",
        accentColor: "#d19a66",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.82,
        headingColor: "#f0b27a",
        linkColor: "#e6b98b",
        blockquoteBorder: "#d19a66",
        blockquoteBg: "#221f1d",
        inlineCodeText: "#f2d4b2",
        inlineCodeBg: "#241f1a",
        codeBlockText: "#efe2d3",
        codeBlockBg: "#2b2623",
        codeBlockBorder: "#4b423d",
        tableHeaderBg: "#2b2623",
        listMarkerColor: "#d19a66",
        ruleColor: "#4b423d",
      },
      customCss: "",
    },
    "graphite-light": {
      label: "Graphite Light",
      tokens: {
        pageBg: "#fcfaf7",
        panelBg: "#f4ede6",
        textColor: "#2c241e",
        mutedColor: "#786a5d",
        borderColor: "#dac8b7",
        accentColor: "#b56c35",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.82,
        headingColor: "#8f4d1d",
        linkColor: "#9a5521",
        blockquoteBorder: "#b56c35",
        blockquoteBg: "#f4ede6",
        inlineCodeText: "#7b3f12",
        inlineCodeBg: "#efe6de",
        codeBlockText: "#3b2c20",
        codeBlockBg: "#fffdf9",
        codeBlockBorder: "#dac8b7",
        tableHeaderBg: "#f4ede6",
        listMarkerColor: "#b56c35",
        ruleColor: "#dac8b7",
      },
      customCss: "",
    },
    "graphite-code": {
      label: "Graphite Code",
      tokens: {
        pageBg: "#171616",
        panelBg: "#221f1d",
        textColor: "#ddd6cf",
        mutedColor: "#a59a90",
        borderColor: "#4b423d",
        accentColor: "#d19a66",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.82,
        headingColor: "#f0b27a",
        linkColor: "#e6b98b",
        blockquoteBorder: "#d19a66",
        blockquoteBg: "#221f1d",
        inlineCodeText: "#f2d4b2",
        inlineCodeBg: "#241f1a",
        codeBlockText: "#d4d4d4",
        codeBlockBg: "#2b2623",
        codeBlockBorder: "#4b423d",
        tableHeaderBg: "#2b2623",
        listMarkerColor: "#d19a66",
        ruleColor: "#4b423d",
      },
      customCss: "",
    },
    "graphite-code-light": {
      label: "Graphite Code Light",
      tokens: {
        pageBg: "#fcfaf7",
        panelBg: "#f4ede6",
        textColor: "#2c241e",
        mutedColor: "#786a5d",
        borderColor: "#dac8b7",
        accentColor: "#b56c35",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.82,
        headingColor: "#8f4d1d",
        linkColor: "#9a5521",
        blockquoteBorder: "#b56c35",
        blockquoteBg: "#f4ede6",
        inlineCodeText: "#7b3f12",
        inlineCodeBg: "#efe6de",
        codeBlockText: "#1a1520",
        codeBlockBg: "#ebe2d6",
        codeBlockBorder: "#c9b29a",
        tableHeaderBg: "#f4ede6",
        listMarkerColor: "#b56c35",
        ruleColor: "#dac8b7",
      },
      customCss: "",
    },
    meridian: {
      label: "Meridian",
      tokens: {
        pageBg: "#0f1718",
        panelBg: "#152123",
        textColor: "#d8e6df",
        mutedColor: "#93aca3",
        borderColor: "#2d4749",
        accentColor: "#62c3a5",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.78,
        headingColor: "#62c3a5",
        linkColor: "#7ed7c5",
        blockquoteBorder: "#38b2ac",
        blockquoteBg: "#152123",
        inlineCodeText: "#a0f1dc",
        inlineCodeBg: "#132226",
        codeBlockText: "#def6ee",
        codeBlockBg: "#1b2b2e",
        codeBlockBorder: "#2d4749",
        tableHeaderBg: "#1b2b2e",
        listMarkerColor: "#62c3a5",
        ruleColor: "#2d4749",
      },
      customCss: "",
    },
    "meridian-light": {
      label: "Meridian Light",
      tokens: {
        pageBg: "#f4faf7",
        panelBg: "#e6f2ec",
        textColor: "#213835",
        mutedColor: "#64817a",
        borderColor: "#bfd7ce",
        accentColor: "#257a61",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.78,
        headingColor: "#257a61",
        linkColor: "#1c7f70",
        blockquoteBorder: "#2f9c86",
        blockquoteBg: "#e6f2ec",
        inlineCodeText: "#116252",
        inlineCodeBg: "#e3f1ea",
        codeBlockText: "#21423b",
        codeBlockBg: "#ffffff",
        codeBlockBorder: "#bfd7ce",
        tableHeaderBg: "#e6f2ec",
        listMarkerColor: "#257a61",
        ruleColor: "#bfd7ce",
      },
      customCss: "",
    },
    blueprint: {
      label: "Blueprint",
      tokens: {
        pageBg: "#0b2a4a",
        panelBg: "#0f355a",
        textColor: "#d7ecff",
        mutedColor: "#7eafd4",
        borderColor: "#3d7eb0",
        accentColor: "#7ec8ff",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.76,
        headingColor: "#7ec8ff",
        linkColor: "#9ad4ff",
        blockquoteBorder: "#7ec8ff",
        blockquoteBg: "#0f355a",
        inlineCodeText: "#b8e0ff",
        inlineCodeBg: "#0a2340",
        codeBlockText: "#e8f5ff",
        codeBlockBg: "#13406b",
        codeBlockBorder: "#3d7eb0",
        tableHeaderBg: "#13406b",
        listMarkerColor: "#7ec8ff",
        ruleColor: "#3d7eb0",
      },
      customCss: "",
    },
    "blueprint-light": {
      label: "Blueprint Light",
      tokens: {
        pageBg: "#f3f7fb",
        panelBg: "#e6eef6",
        textColor: "#14324f",
        mutedColor: "#5a7d9a",
        borderColor: "#9bb6ce",
        accentColor: "#1d5f96",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.76,
        headingColor: "#1d5f96",
        linkColor: "#1760a8",
        blockquoteBorder: "#1d5f96",
        blockquoteBg: "#e6eef6",
        inlineCodeText: "#0f4c81",
        inlineCodeBg: "#dde8f3",
        codeBlockText: "#14324f",
        codeBlockBg: "#ffffff",
        codeBlockBorder: "#9bb6ce",
        tableHeaderBg: "#e6eef6",
        listMarkerColor: "#1d5f96",
        ruleColor: "#9bb6ce",
      },
      customCss: "",
    },
    phosphor: {
      label: "Phosphor",
      tokens: {
        pageBg: "#07140c",
        panelBg: "#0c1c12",
        textColor: "#b6f5c4",
        mutedColor: "#5f9a6f",
        borderColor: "#1f4a2d",
        accentColor: "#39ff88",
        fontFamily: "\"IBM Plex Sans\", \"Segoe UI\", system-ui, sans-serif",
        codeFontFamily: "\"IBM Plex Mono\", \"Cascadia Code\", Consolas, monospace",
        fontSize: 16,
        lineHeight: 1.72,
        headingColor: "#39ff88",
        linkColor: "#6dffb8",
        blockquoteBorder: "#39ff88",
        blockquoteBg: "#0c1c12",
        inlineCodeText: "#7dffb0",
        inlineCodeBg: "#08160e",
        codeBlockText: "#d4ffe0",
        codeBlockBg: "#102418",
        codeBlockBorder: "#1f4a2d",
        tableHeaderBg: "#102418",
        listMarkerColor: "#39ff88",
        ruleColor: "#1f4a2d",
      },
      customCss: "",
    },
    "phosphor-amber": {
      label: "Phosphor Amber",
      tokens: {
        pageBg: "#140d06",
        panelBg: "#1c1309",
        textColor: "#f5d7a1",
        mutedColor: "#9a7344",
        borderColor: "#4a3218",
        accentColor: "#ffb040",
        fontFamily: "\"IBM Plex Sans\", \"Segoe UI\", system-ui, sans-serif",
        codeFontFamily: "\"IBM Plex Mono\", \"Cascadia Code\", Consolas, monospace",
        fontSize: 16,
        lineHeight: 1.72,
        headingColor: "#ffb040",
        linkColor: "#ffc45c",
        blockquoteBorder: "#ffb040",
        blockquoteBg: "#1c1309",
        inlineCodeText: "#ffd27a",
        inlineCodeBg: "#181008",
        codeBlockText: "#ffe6b0",
        codeBlockBg: "#24180c",
        codeBlockBorder: "#4a3218",
        tableHeaderBg: "#24180c",
        listMarkerColor: "#ffb040",
        ruleColor: "#4a3218",
      },
      customCss: "",
    },
    matcha: {
      label: "Matcha",
      tokens: {
        pageBg: "#121812",
        panelBg: "#1a2219",
        textColor: "#e4ebd8",
        mutedColor: "#8fa384",
        borderColor: "#3d4d38",
        accentColor: "#8fbf6a",
        fontFamily: "\"Iowan Old Style\", \"Palatino Linotype\", Palatino, Georgia, serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, monospace",
        fontSize: 16,
        lineHeight: 1.84,
        headingColor: "#8fbf6a",
        linkColor: "#a8d07c",
        blockquoteBorder: "#c4a35a",
        blockquoteBg: "#1a2219",
        inlineCodeText: "#d4e8b8",
        inlineCodeBg: "#171f16",
        codeBlockText: "#e8f0d8",
        codeBlockBg: "#222c20",
        codeBlockBorder: "#3d4d38",
        tableHeaderBg: "#222c20",
        listMarkerColor: "#8fbf6a",
        ruleColor: "#3d4d38",
      },
      customCss: "",
    },
    "matcha-light": {
      label: "Matcha Light",
      tokens: {
        pageBg: "#f5f7ef",
        panelBg: "#e8eedc",
        textColor: "#2a3324",
        mutedColor: "#6d7a62",
        borderColor: "#c5d0b4",
        accentColor: "#4f7a3a",
        fontFamily: "\"Iowan Old Style\", \"Palatino Linotype\", Palatino, Georgia, serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, monospace",
        fontSize: 16,
        lineHeight: 1.84,
        headingColor: "#4f7a3a",
        linkColor: "#3f6b2e",
        blockquoteBorder: "#8a6a2e",
        blockquoteBg: "#e8eedc",
        inlineCodeText: "#355828",
        inlineCodeBg: "#e3ebd4",
        codeBlockText: "#2a3324",
        codeBlockBg: "#fbfcf6",
        codeBlockBorder: "#c5d0b4",
        tableHeaderBg: "#e8eedc",
        listMarkerColor: "#4f7a3a",
        ruleColor: "#c5d0b4",
      },
      customCss: "",
    },
    beacon: {
      label: "Beacon",
      tokens: {
        pageBg: "#1a1d24",
        panelBg: "#22262f",
        textColor: "#e6e8ee",
        mutedColor: "#9aa3b2",
        borderColor: "#3a4150",
        accentColor: "#5a9fd4",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.8,
        headingColor: "#5a9fd4",
        linkColor: "#6aafde",
        blockquoteBorder: "#c9a06a",
        blockquoteBg: "#22262f",
        inlineCodeText: "#8ec8e8",
        inlineCodeBg: "#2e3440",
        codeBlockText: "#d6dae3",
        codeBlockBg: "#151820",
        codeBlockBorder: "#3a4150",
        tableHeaderBg: "#2a2f3a",
        listMarkerColor: "#5a9fd4",
        ruleColor: "#3a4150",
      },
      customCss: "",
    },
    "beacon-light": {
      label: "Beacon Light",
      tokens: {
        pageBg: "#f6f7fa",
        panelBg: "#e9edf4",
        textColor: "#1f2430",
        mutedColor: "#5f6b7c",
        borderColor: "#c5cddb",
        accentColor: "#1f6fb3",
        fontFamily: "Inter, \"Segoe UI\", Arial, sans-serif",
        codeFontFamily: "\"Cascadia Code\", Consolas, \"Courier New\", monospace",
        fontSize: 16,
        lineHeight: 1.8,
        headingColor: "#1f6fb3",
        linkColor: "#1a62a0",
        blockquoteBorder: "#9a5f28",
        blockquoteBg: "#e9edf4",
        inlineCodeText: "#0f4f8f",
        inlineCodeBg: "#e2e8f2",
        codeBlockText: "#1a2030",
        codeBlockBg: "#eef2f8",
        codeBlockBorder: "#c5cddb",
        tableHeaderBg: "#e9edf4",
        listMarkerColor: "#1f6fb3",
        ruleColor: "#c5cddb",
      },
      customCss: "",
    },
  };

  const STORAGE_KEY = "mpe-theme-workbench-state";
  const FIXTURE_STORAGE_KEY = "mpe-theme-workbench-fixture";
  const renderedCache = new Map();

  const fieldIds = [
    "pageBg",
    "panelBg",
    "textColor",
    "mutedColor",
    "borderColor",
    "accentColor",
    "fontFamily",
    "codeFontFamily",
    "fontSize",
    "lineHeight",
    "headingColor",
    "linkColor",
    "blockquoteBorder",
    "blockquoteBg",
    "inlineCodeText",
    "inlineCodeBg",
    "codeBlockText",
    "codeBlockBg",
    "codeBlockBorder",
    "tableHeaderBg",
    "listMarkerColor",
    "ruleColor",
  ];

  const fieldMap = {
    pageBg: document.getElementById("page-bg"),
    panelBg: document.getElementById("panel-bg"),
    textColor: document.getElementById("text-color"),
    mutedColor: document.getElementById("muted-color"),
    borderColor: document.getElementById("border-color"),
    accentColor: document.getElementById("accent-color"),
    fontFamily: document.getElementById("font-family"),
    codeFontFamily: document.getElementById("code-font-family"),
    fontSize: document.getElementById("font-size"),
    lineHeight: document.getElementById("line-height"),
    headingColor: document.getElementById("heading-color"),
    linkColor: document.getElementById("link-color"),
    blockquoteBorder: document.getElementById("blockquote-border"),
    blockquoteBg: document.getElementById("blockquote-bg"),
    inlineCodeText: document.getElementById("inline-code-text"),
    inlineCodeBg: document.getElementById("inline-code-bg"),
    codeBlockText: document.getElementById("code-block-text"),
    codeBlockBg: document.getElementById("code-block-bg"),
    codeBlockBorder: document.getElementById("code-block-border"),
    tableHeaderBg: document.getElementById("table-header-bg"),
    listMarkerColor: document.getElementById("list-marker-color"),
    ruleColor: document.getElementById("rule-color"),
  };

  const presetSelect = document.getElementById("preset-select");
  const fixtureSelect = document.getElementById("fixture-select");
  const resetSessionButton = document.getElementById("reset-session-button");
  const loadCssButton = document.getElementById("load-css-button");
  const cssFileInput = document.getElementById("css-file-input");
  const cssStatus = document.getElementById("css-status");
  const fixtureSource = document.getElementById("fixture-source");
  const customCssInput = document.getElementById("custom-css");
  const runtimeStyle = document.getElementById("runtime-css");
  const previewContent = document.getElementById("preview-content");
  const generatedCssOutput = document.getElementById("generated-css");
  const themeJsonOutput = document.getElementById("theme-json");
  const themeSummaryOutput = document.getElementById("theme-summary");
  const fontSizeOutput = document.getElementById("font-size-output");
  const lineHeightOutput = document.getElementById("line-height-output");

  const copyCssButton = document.getElementById("copy-css-button");
  const downloadCssButton = document.getElementById("download-css-button");
  const copyJsonButton = document.getElementById("copy-json-button");
  const downloadJsonButton = document.getElementById("download-json-button");
  const copySummaryButton = document.getElementById("copy-summary-button");

  const cloneTokens = (presetId) => structuredClone(PRESETS[presetId].tokens);

  const loadState = () => {
    try {
      const rawState = sessionStorage.getItem(STORAGE_KEY);
      if (!rawState) {
        return {
          presetId: "cpp-modern",
          tokens: cloneTokens("cpp-modern"),
          customCss: "",
        };
      }

      const parsed = JSON.parse(rawState);
      const presetId = PRESETS[parsed.presetId] ? parsed.presetId : "cpp-modern";
      const tokens = { ...cloneTokens(presetId), ...(parsed.tokens ?? {}) };

      return {
        presetId,
        tokens,
        customCss: typeof parsed.customCss === "string" ? parsed.customCss : "",
      };
    } catch {
      return {
        presetId: "cpp-modern",
        tokens: cloneTokens("cpp-modern"),
        customCss: "",
      };
    }
  };

  const state = loadState();

  marked.setOptions({
    gfm: true,
    breaks: false,
  });

  const setStatus = (message) => {
    cssStatus.textContent = message;
  };

  const formatCssValue = (value, suffix = "") =>
    typeof value === "number" ? `${value}${suffix}` : `${value}`;

  const buildCss = (tokens, scopePrefix = "") => {
    const rootSelector = scopePrefix
      ? `${scopePrefix} .markdown-body`
      : ".markdown-body,\n.markdown-preview,\nbody";
    const previewBodySelector = scopePrefix
      ? `${scopePrefix} .markdown-body`
      : ".markdown-body,\n.markdown-preview,\nbody";

    return `/* Generated by preview/app.js for MPE-first theme iteration */
${rootSelector} {
  --mpe-bg: ${tokens.pageBg};
  --mpe-panel: ${tokens.panelBg};
  --mpe-text: ${tokens.textColor};
  --mpe-muted: ${tokens.mutedColor};
  --mpe-border: ${tokens.borderColor};
  --mpe-accent: ${tokens.accentColor};
  --mpe-heading: ${tokens.headingColor};
  --mpe-link: ${tokens.linkColor};
  --mpe-quote-border: ${tokens.blockquoteBorder};
  --mpe-quote-bg: ${tokens.blockquoteBg};
  --mpe-inline-code-text: ${tokens.inlineCodeText};
  --mpe-inline-code-bg: ${tokens.inlineCodeBg};
  --mpe-code-text: ${tokens.codeBlockText};
  --mpe-code-bg: ${tokens.codeBlockBg};
  --mpe-code-border: ${tokens.codeBlockBorder};
  --mpe-table-header-bg: ${tokens.tableHeaderBg};
  --mpe-list-marker: ${tokens.listMarkerColor};
  --mpe-rule: ${tokens.ruleColor};
  --mpe-font-size: ${formatCssValue(tokens.fontSize, "px")};
  --mpe-line-height: ${tokens.lineHeight};
  --mpe-font-family: ${tokens.fontFamily};
  --mpe-code-font-family: ${tokens.codeFontFamily};
}

${previewBodySelector} {
  background: var(--mpe-bg);
  color: var(--mpe-text);
  font-family: var(--mpe-font-family);
  font-size: var(--mpe-font-size);
  line-height: var(--mpe-line-height);
}

${previewBodySelector} h1,
${previewBodySelector} h2,
${previewBodySelector} h3,
${previewBodySelector} h4,
${previewBodySelector} h5,
${previewBodySelector} h6 {
  color: var(--mpe-heading);
  line-height: 1.25;
  margin: 1.5em 0 0.6em;
}

${previewBodySelector} h1,
${previewBodySelector} h2 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid var(--mpe-border);
}

${previewBodySelector} p,
${previewBodySelector} ul,
${previewBodySelector} ol,
${previewBodySelector} blockquote,
${previewBodySelector} table,
${previewBodySelector} pre,
${previewBodySelector} details {
  margin: 0 0 1rem;
}

${previewBodySelector} a {
  color: var(--mpe-link);
}

${previewBodySelector} ul:not(.contains-task-list) > li::marker,
${previewBodySelector} ol > li::marker {
  color: var(--mpe-list-marker);
}

${previewBodySelector} blockquote {
  margin-left: 0;
  padding: 0.35rem 1rem;
  border-left: 4px solid var(--mpe-quote-border);
  background: var(--mpe-quote-bg);
  color: var(--mpe-muted);
}

${previewBodySelector} code {
  padding: 0.15rem 0.35rem;
  border-radius: 6px;
  background: var(--mpe-inline-code-bg);
  color: var(--mpe-inline-code-text);
  font-family: var(--mpe-code-font-family);
}

${previewBodySelector} pre {
  overflow-x: auto;
  padding: 1rem 1.1rem;
  border: 1px solid var(--mpe-code-border);
  border-left: 4px solid var(--mpe-accent);
  border-radius: 12px;
  background: var(--mpe-code-bg);
  color: var(--mpe-code-text);
}

${previewBodySelector} pre code {
  padding: 0;
  background: transparent;
  color: inherit;
}

${previewBodySelector} table {
  width: 100%;
  border-collapse: collapse;
}

${previewBodySelector} th,
${previewBodySelector} td {
  border: 1px solid var(--mpe-border);
  padding: 0.75rem;
  text-align: left;
}

${previewBodySelector} th {
  background: var(--mpe-table-header-bg);
}

${previewBodySelector} hr {
  height: 1px;
  margin: 2rem 0;
  border: 0;
  background: var(--mpe-rule);
}

${previewBodySelector} li.task-list-item {
  list-style: none;
}

${previewBodySelector} input[type="checkbox"] {
  margin: 0 0.45rem 0 0;
  accent-color: var(--mpe-accent);
}

${previewBodySelector} details {
  padding: 0.75rem 1rem;
  border: 1px solid var(--mpe-border);
  border-radius: 12px;
  background: var(--mpe-panel);
}

${previewBodySelector} summary {
  cursor: pointer;
  font-weight: 600;
}`;
  };

  const buildHandoffSummary = () => {
    const preset = PRESETS[state.presetId].label;
    const overrideNote = state.customCss.trim()
      ? `Custom CSS overrides present (${state.customCss.trim().split("\n").length} lines).`
      : "No custom CSS overrides.";

    return [
      `Preset family: ${preset}`,
      `Fixture: ${FIXTURES.find((fixture) => fixture.id === fixtureSelect.value)?.file ?? FIXTURES[0].file}`,
      `Global: bg ${state.tokens.pageBg}, surface ${state.tokens.panelBg}, text ${state.tokens.textColor}, accent ${state.tokens.accentColor}`,
      `Typography: ${state.tokens.fontFamily}, ${state.tokens.fontSize}px, line-height ${state.tokens.lineHeight}`,
      `Headings/links: heading ${state.tokens.headingColor}, link ${state.tokens.linkColor}`,
      `Quotes/code: quote border ${state.tokens.blockquoteBorder}, inline code bg ${state.tokens.inlineCodeBg}, code block bg ${state.tokens.codeBlockBg}`,
      `Tables/lists/rules: table header ${state.tokens.tableHeaderBg}, list marker ${state.tokens.listMarkerColor}, rule ${state.tokens.ruleColor}`,
      overrideNote,
      "Use the exported CSS and token JSON as the source material for a new MPE bundle.",
    ].join("\n");
  };

  const persistState = () => {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        presetId: state.presetId,
        tokens: state.tokens,
        customCss: state.customCss,
      })
    );
  };

  const updateOutputs = () => {
    const previewCss = buildCss(state.tokens, ".preview-stage");
    const exportCss = buildCss(state.tokens);

    runtimeStyle.textContent = `${previewCss}\n\n${state.customCss}`;
    generatedCssOutput.value = `${exportCss}\n\n${state.customCss}`.trim();
    themeJsonOutput.value = JSON.stringify(
      {
        presetId: state.presetId,
        presetLabel: PRESETS[state.presetId].label,
        tokens: state.tokens,
        customCss: state.customCss,
      },
      null,
      2
    );
    themeSummaryOutput.value = buildHandoffSummary();
    fontSizeOutput.value = `${state.tokens.fontSize}px`;
    lineHeightOutput.value = `${state.tokens.lineHeight}`;
    persistState();
  };

  const syncControlsFromState = () => {
    presetSelect.value = state.presetId;

    for (const fieldId of fieldIds) {
      fieldMap[fieldId].value = `${state.tokens[fieldId]}`;
    }

    customCssInput.value = state.customCss;
    updateOutputs();
  };

  const syncStateFromControls = () => {
    for (const fieldId of fieldIds) {
      const input = fieldMap[fieldId];
      const isNumeric = input.type === "range";
      state.tokens[fieldId] = isNumeric ? Number(input.value) : input.value;
    }

    state.customCss = customCssInput.value;
    updateOutputs();
  };

  const applyPreset = (presetId) => {
    state.presetId = presetId;
    state.tokens = cloneTokens(presetId);
    state.customCss = PRESETS[presetId].customCss;
    syncControlsFromState();
    setStatus(`Loaded preset family: ${PRESETS[presetId].label}`);
  };

  const loadFixtureMarkdown = async (file) => {
    try {
      const response = await fetch(`../examples/${file}`);
      if (response.ok) {
        return { markdown: await response.text(), source: "fetch" };
      }
    } catch {
      // file:// and other fetch failures fall back to embedded fixtures
    }

    return {
      markdown: EMBEDDED_MARKDOWN[file],
      source: "embedded",
    };
  };

  const renderFixture = async (fixtureId) => {
    const fixture = FIXTURES.find((item) => item.id === fixtureId) ?? FIXTURES[0];
    let cached = renderedCache.get(fixture.id);

    if (!cached) {
      const { markdown, source } = await loadFixtureMarkdown(fixture.file);
      cached = {
        html: marked.parse(markdown),
        source,
      };
      renderedCache.set(fixture.id, cached);
    }

    previewContent.innerHTML = cached.html;
    fixtureSource.hidden = false;
    fixtureSource.textContent =
      cached.source === "fetch"
        ? `Loaded live from examples/${fixture.file}`
        : `Using embedded fixture fallback for examples/${fixture.file}`;
    sessionStorage.setItem(FIXTURE_STORAGE_KEY, fixture.id);
  };

  const downloadText = (filename, text, mimeType) => {
    const blob = new Blob([text], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const copyText = async (text, successMessage) => {
    await navigator.clipboard.writeText(text);
    setStatus(successMessage);
  };

  const importCssOverride = async (file) => {
    if (!file || !file.name.toLowerCase().endsWith(".css")) {
      setStatus("Please choose a valid .css file.");
      return;
    }

    state.customCss = await file.text();
    customCssInput.value = state.customCss;
    updateOutputs();
    setStatus(`Imported CSS override: ${file.name}`);
  };

  FIXTURES.forEach((fixture) => {
    const option = document.createElement("option");
    option.value = fixture.id;
    option.textContent = `${fixture.label} (${fixture.file})`;
    fixtureSelect.appendChild(option);
  });

  const initialFixtureId =
    sessionStorage.getItem(FIXTURE_STORAGE_KEY) ?? FIXTURES[0].id;
  fixtureSelect.value = FIXTURES.some((fixture) => fixture.id === initialFixtureId)
    ? initialFixtureId
    : FIXTURES[0].id;

  syncControlsFromState();
  await renderFixture(fixtureSelect.value);

  presetSelect.addEventListener("change", (event) => {
    applyPreset(event.target.value);
  });

  fixtureSelect.addEventListener("change", async (event) => {
    await renderFixture(event.target.value);
    updateOutputs();
  });

  resetSessionButton.addEventListener("click", () => {
    applyPreset(state.presetId);
    setStatus("Reset the current session to the selected preset.");
  });

  loadCssButton.addEventListener("click", () => {
    cssFileInput.click();
  });

  cssFileInput.addEventListener("change", async (event) => {
    await importCssOverride(event.target.files?.[0]);
  });

  customCssInput.addEventListener("input", () => {
    syncStateFromControls();
  });

  for (const fieldId of fieldIds) {
    fieldMap[fieldId].addEventListener("input", () => {
      syncStateFromControls();
    });
  }

  copyCssButton.addEventListener("click", async () => {
    await copyText(generatedCssOutput.value, "Copied generated MPE CSS.");
  });

  downloadCssButton.addEventListener("click", () => {
    downloadText("mpe-theme-workbench.css", generatedCssOutput.value, "text/css");
    setStatus("Downloaded generated CSS.");
  });

  copyJsonButton.addEventListener("click", async () => {
    await copyText(themeJsonOutput.value, "Copied theme tokens JSON.");
  });

  downloadJsonButton.addEventListener("click", () => {
    downloadText("mpe-theme-workbench.json", themeJsonOutput.value, "application/json");
    setStatus("Downloaded theme tokens JSON.");
  });

  copySummaryButton.addEventListener("click", async () => {
    await copyText(themeSummaryOutput.value, "Copied the session handoff summary.");
  });

  document.addEventListener("dragover", (event) => {
    if ([...event.dataTransfer.items].some((item) => item.kind === "file")) {
      event.preventDefault();
      document.body.classList.add("is-dragging-css");
    }
  });

  document.addEventListener("dragleave", (event) => {
    if (event.target === document.documentElement) {
      document.body.classList.remove("is-dragging-css");
    }
  });

  document.addEventListener("drop", async (event) => {
    event.preventDefault();
    document.body.classList.remove("is-dragging-css");

    const cssFile = [...event.dataTransfer.files].find((file) =>
      file.name.toLowerCase().endsWith(".css")
    );

    if (!cssFile) {
      setStatus("Drop a .css file to import it as a custom override.");
      return;
    }

    await importCssOverride(cssFile);
  });
})();
