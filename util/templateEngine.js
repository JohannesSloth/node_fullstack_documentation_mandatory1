import fs from "fs";
import navlinkUtil from "./navlinkUtil.js";
//import hljs from "highlight.js/lib/common"

function renderPage(page, config={}) {
    const header = fs.readFileSync("./public/components/header/header.html").toString()
                    .replace("$TAB_TITLE", config.tabTitle || "Node Course Documentation")
                    .replace("$CSS_LINK", config.cssLink || `<link rel="stylesheet" href="../assets/css/main.css">`)
                    .replace("$NAV_LINKS", navlinkUtil.getNavLinks() || "");
    const footer = fs.readFileSync("./public/components/footer/footer.html");

    //const highlightedPage = hljs.highlightAuto(page).value

    return header + page + footer;
}

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

export default {
    renderPage,
    readPage
};