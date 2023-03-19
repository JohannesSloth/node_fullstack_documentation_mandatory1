import fs from "fs";

function renderPage(page, config={}) {
    const header = fs.readFileSync("./public/components/header/header.html");
    const footer = fs.readFileSync("./public/components/footer/footer.html");

    return header + page + footer;
}

export default {
    renderPage
};