/*
 * Cursor inline markdown preview task list patch.
 *
 * Cursor's Preview | Markdown mode renders GFM task lists as plain bullet lists.
 * This script reads the underlying markdown, injects checkbox UI, and writes
 * [x]/[ ] changes back through the editor handle when available.
 */
(() => {
  const PATCH = {
    id: "markdown-task-list-patch",
    contentSelector: ".markdown-editor-react__richtext-content",
    editorRootSelector: ".tiptap.ProseMirror, .ProseMirror",
    checkboxClass: "cursor-task-list-checkbox",
    patchedListClass: "cursor-task-list-patched",
    patchedItemClass: "cursor-task-list-item",
  };

  const TASK_LINE =
    /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/;

  const containersBeingToggled = new WeakSet();
  let scheduled = false;

  const normalizeText = (value) =>
    (value || "")
      .replace(/\u00a0/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const getReactFiber = (dom) => {
    if (!dom) {
      return null;
    }

    const key = Object.keys(dom).find(
      (name) =>
        name.startsWith("__reactFiber$") ||
        name.startsWith("__reactInternalInstance$")
    );

    return key ? dom[key] : null;
  };

  const findMarkdownHandle = (container) => {
    const host =
      container.closest(".markdown-editor-react") ||
      container.closest(".markdown-editor-react__content") ||
      container;

    const stack = [];
    const seen = new Set();
    let fiber = getReactFiber(host);

    while (fiber && !seen.has(fiber)) {
      seen.add(fiber);

      const props = fiber.memoizedProps || fiber.pendingProps || {};
      const ref = props.ref?.current || props.ref;

      if (ref && typeof ref.getMarkdown === "function") {
        return ref;
      }

      if (typeof props.getMarkdown === "function") {
        return props;
      }

      if (props.editorRef?.current?.getMarkdown) {
        return props.editorRef.current;
      }

      if (fiber.child) {
        stack.push(fiber.child);
      }
      if (fiber.sibling) {
        stack.push(fiber.sibling);
      }

      fiber = stack.pop() || null;
    }

    return null;
  };

  const getEditorRoot = (container) =>
    container.querySelector(PATCH.editorRootSelector);

  const getMarkdown = (container) => {
    const handle = findMarkdownHandle(container);
    if (!handle?.getMarkdown) {
      return { handle: null, markdown: null };
    }

    try {
      return { handle, markdown: handle.getMarkdown() || "" };
    } catch {
      return { handle, markdown: null };
    }
  };

  const setMarkdown = (handle, markdown) => {
    if (!handle) {
      return false;
    }

    if (typeof handle.setMarkdown === "function") {
      handle.setMarkdown(markdown);
      return true;
    }

    if (typeof handle.setContent === "function") {
      handle.setContent(markdown);
      return true;
    }

    return false;
  };

  const parseTaskListBlocks = (markdown) => {
    const lines = markdown.split("\n");
    const blocks = [];
    let index = 0;

    while (index < lines.length) {
      const match = lines[index]?.match(TASK_LINE);
      if (!match) {
        index += 1;
        continue;
      }

      const items = [];
      while (index < lines.length) {
        const lineMatch = lines[index]?.match(TASK_LINE);
        if (!lineMatch) {
          break;
        }

        items.push({
          line: index,
          indent: lineMatch[1].length,
          checked: lineMatch[3].toLowerCase() === "x",
          text: lineMatch[4].trim(),
        });
        index += 1;
      }

      if (items.length > 0) {
        blocks.push({ items });
      }
    }

    return blocks;
  };

  const getListItemText = (listItem) => {
    const clone = listItem.cloneNode(true);
    clone
      .querySelectorAll("ul, ol, .cursor-task-list-checkbox, input[type=checkbox]")
      .forEach((node) => node.remove());
    return normalizeText(clone.textContent);
  };

  const listsMatchBlock = (listElement, block) => {
    const items = [...listElement.children].filter(
      (node) => node.tagName === "LI"
    );

    if (items.length !== block.items.length) {
      return false;
    }

    return items.every((item, itemIndex) => {
      return getListItemText(item) === normalizeText(block.items[itemIndex].text);
    });
  };

  const ensureLabelWrapper = (listItem) => {
    let label = listItem.querySelector(":scope > .cursor-task-list-label");

    if (label) {
      return label;
    }

    label = document.createElement("span");
    label.className = "cursor-task-list-label task-list-item-label";

    const movableNodes = [];
    for (const node of [...listItem.childNodes]) {
      if (
        node.nodeType === Node.ELEMENT_NODE &&
        (node.tagName === "UL" || node.tagName === "OL")
      ) {
        continue;
      }

      if (
        node.nodeType === Node.ELEMENT_NODE &&
        node.classList.contains(PATCH.checkboxClass)
      ) {
        continue;
      }

      movableNodes.push(node);
    }

    movableNodes.forEach((node) => label.appendChild(node));
    listItem.insertBefore(label, listItem.querySelector(":scope > ul, :scope > ol"));
    return label;
  };

  const applyTaskListPatch = (container, listElement, block, handle) => {
    listElement.classList.add("contains-task-list", PATCH.patchedListClass);
    listElement.dataset.taskListPatch = "true";

    const listItems = [...listElement.children].filter(
      (node) => node.tagName === "LI"
    );

    listItems.forEach((listItem, itemIndex) => {
      const task = block.items[itemIndex];
      listItem.classList.add("task-list-item", PATCH.patchedItemClass);
      listItem.dataset.taskLine = String(task.line);

      let checkbox = listItem.querySelector(
        `:scope > .${PATCH.checkboxClass}, :scope > input[type=checkbox]`
      );

      if (!checkbox) {
        checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = `${PATCH.checkboxClass} task-list-item-checkbox`;
        listItem.insertBefore(checkbox, listItem.firstChild);
      }

      checkbox.checked = task.checked;
      checkbox.disabled = false;
      checkbox.setAttribute("aria-label", task.text || "Task item");

      if (checkbox.dataset.patchBound !== "true") {
        checkbox.dataset.patchBound = "true";
        checkbox.addEventListener("change", () => {
          toggleTaskItem(container, handle, task.line, checkbox.checked);
        });
      }

      ensureLabelWrapper(listItem);
    });
  };

  const toggleTaskItem = (container, handle, lineIndex, checked) => {
    const activeHandle = handle || findMarkdownHandle(container);
    if (!activeHandle?.getMarkdown) {
      return;
    }

    const markdown = activeHandle.getMarkdown() || "";
    const lines = markdown.split("\n");
    const line = lines[lineIndex];

    if (!line || !TASK_LINE.test(line)) {
      return;
    }

    lines[lineIndex] = line.replace(
      /\[([ xX])\]/,
      checked ? "[x]" : "[ ]"
    );

    containersBeingToggled.add(container);
    setMarkdown(activeHandle, lines.join("\n"));
    window.requestAnimationFrame(() => {
      containersBeingToggled.delete(container);
      renderContainer(container);
    });
  };

  const clearPatchArtifacts = (container) => {
    container
      .querySelectorAll(`.${PATCH.patchedListClass}`)
      .forEach((listElement) => {
        listElement.classList.remove(
          "contains-task-list",
          PATCH.patchedListClass
        );
        delete listElement.dataset.taskListPatch;
      });

    container
      .querySelectorAll(`.${PATCH.patchedItemClass}`)
      .forEach((listItem) => {
        listItem.classList.remove("task-list-item", PATCH.patchedItemClass);
        delete listItem.dataset.taskLine;
      });
  };

  const renderContainer = (container) => {
    if (!container || containersBeingToggled.has(container)) {
      return;
    }

    const editorRoot = getEditorRoot(container);
    if (!editorRoot) {
      return;
    }

    const { handle, markdown } = getMarkdown(container);
    if (!markdown) {
      return;
    }

    const blocks = parseTaskListBlocks(markdown);
    if (blocks.length === 0) {
      clearPatchArtifacts(container);
      return;
    }

    clearPatchArtifacts(container);

    const listElements = [...editorRoot.querySelectorAll("ul")];
    let blockIndex = 0;

    for (const listElement of listElements) {
      if (blockIndex >= blocks.length) {
        break;
      }

      const block = blocks[blockIndex];
      if (!listsMatchBlock(listElement, block)) {
        continue;
      }

      applyTaskListPatch(container, listElement, block, handle);
      blockIndex += 1;
    }
  };

  const getPreviewContainers = () => {
    const containers = [];
    const seenEditorRoots = new Set();

    for (const container of document.querySelectorAll(PATCH.contentSelector)) {
      const editorRoot = getEditorRoot(container);
      if (!editorRoot || seenEditorRoots.has(editorRoot)) {
        continue;
      }

      seenEditorRoots.add(editorRoot);
      containers.push(container);
    }

    return containers;
  };

  const renderAll = () => {
    scheduled = false;
    for (const container of getPreviewContainers()) {
      renderContainer(container);
    }
  };

  const scheduleRender = () => {
    if (scheduled) {
      return;
    }

    scheduled = true;
    window.requestAnimationFrame(renderAll);
  };

  if (window.__markdownTaskListPatchEnableTestHooks) {
    window.__markdownTaskListPatchTest = {
      renderAll,
      renderContainer,
      parseTaskListBlocks,
      findMarkdownHandle,
    };
  }

  const observer = new MutationObserver(scheduleRender);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleRender, { once: true });
  } else {
    scheduleRender();
  }
})();
