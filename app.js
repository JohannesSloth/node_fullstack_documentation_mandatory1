import express from "express";
import { marked } from "marked";
import fs from "fs";

const app = express();

app.use(express.static("public"));

app.get('/docs/:filename', (req, res) => {
    const filePath = `./docs/${req.params.filename}.md`;
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return res.status(404).send('File not found');
      }
      const html = marked(data);
      res.send(html);
    });
  });


const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running port", PORT);
})