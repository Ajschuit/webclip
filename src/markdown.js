import TurndownService from "turndown";

const td = new TurndownService({

    headingStyle: "atx",
    bulletListMarker: "-",
    codeBlockStyle: "fenced"

});

export function toMarkdown(root) {

    return td.turndown(root);

}