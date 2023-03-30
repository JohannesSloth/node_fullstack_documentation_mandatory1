import fs from "fs";
import path from "path";

function getNavLinks() {
  const docsPath = "./public/docs";
  const fileNames = fs.readdirSync(docsPath);
  return fileNames
    .filter((fileName) => path.extname(fileName) === ".md")
    .map((fileName) => {
      const fileTitle = path.basename(fileName, ".md");
      const capitalizedFileTitle =
        fileTitle.charAt(0).toUpperCase() + fileTitle.slice(1);
      const fileURL = `/docs/${fileTitle}`;
      return `<a href="${fileURL}">${capitalizedFileTitle}</a>`;
    })
    .join("\n");
}

export default {
  getNavLinks,
};
