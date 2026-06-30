export function downloadMarkdown(title, text) {

    const blob = new Blob([text], {
        type: "text/markdown"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download =
        title
            .replace(/[^\w\s-]/g, "")
            .trim() +
        ".md";

    a.click();

    URL.revokeObjectURL(url);

}