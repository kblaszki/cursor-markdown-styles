/*
 * Cursor inline Markdown preview — YAML front matter patch
 *
 * Install:
 * 1. Copy this file next to workbench.html, e.g.
 *    %LOCALAPPDATA%\Programs\cursor\resources\app\out\frontmatter-patch.js
 * 2. Add before </body> in workbench.html:
 *    <script src="./frontmatter-patch.js"></script>
 * 3. Restart Cursor completely.
 *
 * Detects leading --- ... --- blocks at the start of the document and wraps
 * the rendered preview nodes in .cursor-frontmatter for subdued styling.
 */
(() => {
  const CONFIG = {
    contentSelector: ".markdown-editor-react__richtext-content",
    editorRootSelector: ".tiptap.ProseMirror, .ProseMirror",
    wrapperClass: "cursor-frontmatter",
    appliedAttr: "data-frontmatter-applied",
    styleId: "cursor-frontmatter-style",
  };

  let scheduled = false;

  function ensureStyles() {
    if (document.getElementById(CONFIG.styleId)) {
      return;
    }

    const style = document.createElement("style");
    style.id = CONFIG.styleId;
    style.textContent = `
      .${CONFIG.wrapperClass} {
        margin: 0 0 0.9rem;
        padding: 0.55rem 0.8rem;
        border-left: 3px solid color-mix(in srgb, var(--vscode-editorIndentGuide-background, #4b5563) 72%, transparent);
        background: color-mix(in srgb, var(--vscode-editorWidget-background, #1f2937) 84%, transparent);
        color: color-mix(in srgb, var(--vscode-editor-foreground, #d1d5db) 72%, var(--vscode-descriptionForeground, #9ca3af) 28%);
        font-size: 0.93em;
        line-height: 1.35;
        border-radius: 0.4rem;
        opacity: 0.92;
      }

      .${CONFIG.wrapperClass} hr {
        opacity: 0.18;
        margin-block: 0.2rem;
      }

      .${CONFIG.wrapperClass} :is(p, li) {
        margin-block: 0.2rem;
      }

      .${CONFIG.wrapperClass} code {
        font-size: 0.95em;
      }

      .${CONFIG.wrapperClass} + :is(h1, h2, h3) {
        margin-top: 0.75rem;
      }
    `;
    document.head.appendChild(style);
  }

  function normalizeNewlines(text) {
    return (text || "").replace(/\r\n/g, "\n");
  }

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function getPreviewContainers() {
    return Array.from(document.querySelectorAll(CONFIG.contentSelector));
  }

  function getEditorRoot(previewEl) {
    const scopedRoot =
      previewEl.closest(
        ".split-view-view, .editor-instance, .editor-group-container, .monaco-workbench"
      ) || document;

    return (
      scopedRoot.querySelector(CONFIG.editorRootSelector) ||
      document.querySelector(CONFIG.editorRootSelector)
    );
  }

  function readMarkdownFromEditor(editorRoot) {
    if (!editorRoot) {
      return null;
    }

    if (typeof editorRoot.innerText === "string" && editorRoot.innerText.trim()) {
      return normalizeNewlines(editorRoot.innerText);
    }

    if (typeof editorRoot.textContent === "string" && editorRoot.textContent.trim()) {
      return normalizeNewlines(editorRoot.textContent);
    }

    return null;
  }

  function parseLeadingFrontMatter(markdown) {
    const text = normalizeNewlines(markdown);
    const lines = text.split("\n");

    if (!lines.length) {
      return null;
    }
    if (lines[0].trim() !== "---") {
      return null;
    }

    let closingIndex = -1;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === "---") {
        closingIndex = i;
        break;
      }
    }

    if (closingIndex < 2) {
      return null;
    }

    const frontMatterLines = lines.slice(1, closingIndex);

    const hasPropertyLikeLine = frontMatterLines.some((line) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return false;
      }
      if (/^-\s+/.test(trimmed)) {
        return true;
      }
      return /^[A-Za-z0-9_.-]+\s*:\s*.*$/.test(trimmed);
    });

    if (!hasPropertyLikeLine) {
      return null;
    }

    const keys = [];
    for (const line of frontMatterLines) {
      const match = line.trim().match(/^([A-Za-z0-9_.-]+)\s*:\s*(.*)$/);
      if (match) {
        keys.push(match[1]);
      }
    }

    return {
      raw: lines.slice(0, closingIndex + 1).join("\n"),
      keys,
      lineCount: closingIndex + 1,
    };
  }

  function isHeading(node) {
    return !!node && /^H[1-6]$/i.test(node.tagName);
  }

  function isHr(node) {
    return !!node && node.tagName === "HR";
  }

  function looksLikePropertyText(text) {
    const value = (text || "").trim();
    if (!value) {
      return false;
    }
    if (/^-\s+/.test(value)) {
      return true;
    }
    return /^[A-Za-z0-9_.-]+\s*:\s*.*$/.test(value);
  }

  function collectFrontMatterNodes(previewEl, parsedFrontMatter) {
    const children = Array.from(previewEl.children);
    if (!children.length) {
      return null;
    }

    if (isHr(children[0])) {
      let closingHrIndex = -1;
      for (let i = 1; i < children.length; i++) {
        if (isHr(children[i])) {
          closingHrIndex = i;
          break;
        }
      }

      if (closingHrIndex > 1) {
        const middle = children.slice(1, closingHrIndex);
        const next = children[closingHrIndex + 1];

        const propertyLikeCount = middle.filter((node) =>
          looksLikePropertyText(node.textContent || "")
        ).length;

        if (propertyLikeCount > 0 && (!next || isHeading(next) || next.tagName === "P")) {
          return children.slice(0, closingHrIndex + 1);
        }
      }
    }

    const firstH1Index = children.findIndex((node) => node.tagName === "H1");
    if (firstH1Index <= 0) {
      return null;
    }

    const beforeH1 = children.slice(0, firstH1Index);
    const propertyLikeCount = beforeH1.filter(
      (node) => looksLikePropertyText(node.textContent || "") || isHr(node)
    ).length;

    if (!beforeH1.length || propertyLikeCount < Math.min(2, beforeH1.length)) {
      return null;
    }

    const textBlob = beforeH1.map((n) => n.textContent || "").join("\n");
    const keyMatches = parsedFrontMatter.keys.filter((key) =>
      new RegExp(`(^|\\n|\\s)${escapeRegExp(key)}\\s*:`, "m").test(textBlob)
    );

    if (!keyMatches.length) {
      return null;
    }

    return beforeH1;
  }

  function unwrapExisting(previewEl) {
    const existing = previewEl.querySelector(`:scope > .${CONFIG.wrapperClass}`);
    if (!existing) {
      return;
    }

    const parent = existing.parentNode;
    while (existing.firstChild) {
      parent.insertBefore(existing.firstChild, existing);
    }
    existing.remove();
  }

  function wrapNodes(previewEl, nodes) {
    if (!nodes || !nodes.length) {
      return false;
    }

    if (previewEl.getAttribute(CONFIG.appliedAttr) === "true") {
      return false;
    }

    unwrapExisting(previewEl);

    const wrapper = document.createElement("section");
    wrapper.className = CONFIG.wrapperClass;
    wrapper.setAttribute("contenteditable", "false");

    previewEl.insertBefore(wrapper, nodes[0]);
    for (const node of nodes) {
      wrapper.appendChild(node);
    }

    previewEl.setAttribute(CONFIG.appliedAttr, "true");
    return true;
  }

  function resetIfNeeded(previewEl, hasFrontMatter) {
    if (hasFrontMatter) {
      return;
    }
    previewEl.removeAttribute(CONFIG.appliedAttr);
    unwrapExisting(previewEl);
  }

  function patchContainer(previewEl) {
    const editorRoot = getEditorRoot(previewEl);
    const markdown = readMarkdownFromEditor(editorRoot);

    if (!markdown) {
      resetIfNeeded(previewEl, false);
      return;
    }

    const parsedFrontMatter = parseLeadingFrontMatter(markdown);
    if (!parsedFrontMatter) {
      resetIfNeeded(previewEl, false);
      return;
    }

    const nodes = collectFrontMatterNodes(previewEl, parsedFrontMatter);
    if (!nodes || !nodes.length) {
      resetIfNeeded(previewEl, false);
      return;
    }

    wrapNodes(previewEl, nodes);
  }

  function runPatch() {
    scheduled = false;
    ensureStyles();

    for (const previewEl of getPreviewContainers()) {
      try {
        patchContainer(previewEl);
      } catch (error) {
        console.warn("[frontmatter-patch] failed:", error);
      }
    }
  }

  function schedulePatch() {
    if (scheduled) {
      return;
    }
    scheduled = true;
    requestAnimationFrame(runPatch);
  }

  const observer = new MutationObserver(() => {
    schedulePatch();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  ensureStyles();
  schedulePatch();
})();
