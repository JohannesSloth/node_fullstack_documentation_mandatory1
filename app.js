import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { marked } from "marked";
import templateEngine from "./util/templateEngine.js";
import authMiddleware from "./util/authMiddleware.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

const frontpage = templateEngine.readPage(
  path.join(process.cwd(), "public/pages/frontpage/frontpage.html")
);

const login = templateEngine.readPage(
  path.join(process.cwd(), "public/pages/login/login.html")
);

const admin = templateEngine.readPage(
  path.join(process.cwd(), "public/pages/admin/admin.html")
);

app.get("/", (req, res) => {
  res.send(templateEngine.renderPage(frontpage));
});

app.get("/docs/:filename", (req, res) => {
  const filePath = path.join(
    process.cwd(),
    `public/docs/${req.params.filename}.md`
  );
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }
    const docHtml = marked(data);
    const renderedPage = templateEngine.renderPage(docHtml);
    res.send(renderedPage);
  });
});

app.get("/admin", authMiddleware.requireAuth, (req, res) => {
  res.send(templateEngine.renderPage(admin));
});

app.get("/login", (req, res) => {
  res.send(templateEngine.renderPage(login));
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email === process.env.EMAIL && password === process.env.PASSWORD) {
    req.session.isAuthenticated = true;
    res.redirect("/admin");
  } else {
    res.status(401).send("Incorrect email or password");
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    } else {
      res.sendStatus(200);
    }
  });
});

app.post("/admin/create-md", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const filename = `${title}.md`;
  fs.writeFile(
    path.join(process.cwd(), `public/docs/${filename}`),
    content,
    (error) => {
      if (error) {
        console.error(error);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server running port", PORT);
});
