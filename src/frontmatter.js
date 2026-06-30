export function buildFrontmatter(meta) {

    return `---
type: "article"
source: "${meta.url}"
title: "${meta.title}"
collected: "${meta.collected}"
tags:
  - "webclip"
---`;

}