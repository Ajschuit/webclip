export function today() {

    return new Date()
        .toISOString()
        .slice(0, 10);

}

export function sanitizeFilename(text) {

    return text
        .replace(/[^\w\s-]/g, "")
        .trim();

}