import { clipPage } from "./clip.js";

(async () => {
    try {
        await clipPage();
    } catch (e) {
        console.error(e);
        alert(`Webclip failed:\n\n${err.message}`);
    }
})();