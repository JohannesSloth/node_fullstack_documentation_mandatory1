import path from 'path';
import fs from "fs";
import navlinkUtil from "./navlinkUtil.js";

function renderPage(page, config = {}) {
  const header = fs
    .readFileSync(path.join(process.cwd(), 'public/components/header/header.html'))
    .toString()
    .replace("$TAB_TITLE", config.tabTitle || "Node Course Documentation")
    .replace(
      "$CSS_LINK",
      config.cssLink || `<link rel="stylesheet" href="../assets/css/main.css">`
    )
    .replace("$NAV_LINKS", navlinkUtil.getNavLinks() || "");
  const footer = fs.readFileSync(path.join(process.cwd(), 'public/components/footer/footer.html'));

  return header + page + footer;
}

function readPage(pagePath) {
  return fs.readFileSync(pagePath).toString();
}

export default {
  renderPage,
  readPage,
};
