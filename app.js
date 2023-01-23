import express from "express";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("OpenAI ");
});

app.listen(port, () => {
  console.log(`ChatGPT-Article-API app listening on port ${port}`);
});
