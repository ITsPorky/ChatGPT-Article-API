import * as dotenv from "dotenv";
dotenv.config();
// import fetch from "node-fetch";
import express from "express";
import generate from "./src/generate.js";
const app = express();
const port = 3000;

// Routes
app.get(`/`, (req, res) => {
  res.send("OpenAI ");
});

app.get(`/article/:prompt([^:$#@^&*]+)`, (req, res) => {
  const article = generate(req, res);
});

// App Listen
app.listen(port, () => {
  console.log(`ChatGPT-Article-API app listening on port ${port}`);
});
