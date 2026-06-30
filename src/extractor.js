import { Readability } from "@mozilla/readability";
import { getSelectionNode } from "./selection.js";

export function extractContent() {

    // 1. Use highlighted text

    const selection = getSelectionNode();

    if (selection) {

        return {
            root: selection,
            meta: buildMetadata()
        };

    }

    // 2. Use largest article tag

    const articles = [...document.querySelectorAll("article")];

    if (articles.length) {

        articles.sort(
            (a, b) =>
                b.innerText.length -
                a.innerText.length
        );

        return {
            root: articles[0].cloneNode(true),
            meta: buildMetadata()
        };

    }

    // 3. Readability

    const reader = new Readability(
        document.cloneNode(true)
    );

    const parsed = reader.parse();

    if (parsed) {

        const div = document.createElement("div");

        div.innerHTML = parsed.content;

        return {
            root: div,
            meta: {
                ...buildMetadata(),
                title: parsed.title || document.title
            }
        };

    }

    // 4. Last resort

    return {
        root: document.body.cloneNode(true),
        meta: buildMetadata()
    };

}

function buildMetadata() {

    return {

        title: document.title,
        url: location.href,
        collected: new Date().toISOString().slice(0, 10)

    };

}