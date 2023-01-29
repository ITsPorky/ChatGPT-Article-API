import * as dotenv from "dotenv";
dotenv.config();
import schedule from "node-schedule";
import express from "express";
import generate from "./src/generate.js";
import { readArticleData } from "./src/firestore.js";
const app = express();
const port = process.env.PORT || 3000;

// CORs Headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Home Route
app.get(`/`, (req, res) => {
  res.send("OpenAI Article Generator");
  res.sendFile(path.join(__dirname, "/README.html"));
});

// Route to generate article
app.get(`/article/openai/:prompt([^:$#@^&*]+)`, (req, res) => {
  const article = generate(req, res);
  // Store article in firebase
});

// Retrieve article from Firebase
app.get(`/article/:id([0-9]+)`, async (req, res) => {
  const articleData = await readArticleData(req.params.id);
  res.header("Content-Type", "application/json");
  res.send(articleData);
});

// Schedule Event
const job = schedule.scheduleJob("* * 6 * * *", function () {
  // Collect a Idea/topic for the day
  // Make call to OpenAI API with prompt
});

// App Listen
app.listen(port, () => {
  console.log(`ChatGPT-Article-API app listening on port ${port}`);
});
