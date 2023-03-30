import express from "express";
import session from "express-session";
import fs from "fs";
import { marked } from "marked";
import templateEngine from "./util/templateEngine.js";
import authMiddleware from "./util/authMiddleware.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "your-secret-key-here",
    resave: false,
    saveUninitialized: true,
  })
);

const login = templateEngine.readPage("./public/pages/login/login.html")
const loginPage = templateEngine.renderPage(login)

const admin = templateEngine.readPage("./public/pages/admin/admin.html");
const adminPage = templateEngine.renderPage(admin)

app.get('/docs/:filename', (req, res) => {
  const filePath = `public/docs/${req.params.filename}.md`;
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(404).send('File not found');
    }
    const docHtml = marked(data);
    const renderedPage = templateEngine.renderPage(docHtml);
    res.send(renderedPage);
  });
});

app.get("/admin", authMiddleware.requireAuth, (req, res) => {
  res.send(adminPage);
});

app.get("/login", (req, res) => {
  res.send(loginPage);
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email === 'test@test.dk' && password === 'secret') {
    req.session.isAuthenticated = true;
    res.redirect('/admin');
  } else {
    res.status(401).send('Incorrect email or password');
  }
});



const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server running port", PORT);
})