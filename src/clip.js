import { extractContent } from "./extractor.js";
import { toMarkdown } from "./markdown.js";
import { buildFrontmatter } from "./frontmatter.js";
import { downloadMarkdown } from "./download.js";

export async function clipPage() {

    const article = extractContent();

    const markdown = toMarkdown(article.root);

    const output =
        buildFrontmatter(article.meta) +
        "\n\n# " +
        article.meta.title +
        "\n\n" +
        markdown;

    downloadMarkdown(
        article.meta.title,
        output
    );

}