import * as dotenv from "dotenv";
dotenv.config();
import schedule from "node-schedule";
import express from "express";
import generate from "./src/generate.js";
const app = express();
const port = process.env.PORT || 3000;

// Home Route
app.get(`/`, (req, res) => {
  res.send("OpenAI Article Generator");
  res.sendFile(path.join(__dirname, "/README.html"));
});

// Route to generate article
app.get(`/article/:prompt([^:$#@^&*]+)`, (req, res) => {
  const article = generate(req, res);
  // Store article in firebase
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
