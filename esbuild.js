const esbuild = require("esbuild");

esbuild.build({
    entryPoints: ["src/index.js"],
    bundle: true,
    minify: true,
    outfile: "dist/webclip.js",
    format: "iife",
    target: "es2020"
}).catch(() => process.exit(1));