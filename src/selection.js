export function getSelectionNode() {

    const selection = window.getSelection();

    if (!selection || selection.isCollapsed) {
        return null;
    }

    const div = document.createElement("div");

    for (let i = 0; i < selection.rangeCount; i++) {
        div.appendChild(
            selection.getRangeAt(i).cloneContents()
        );
    }

    return div;

}