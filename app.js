const express = require("express");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("hello from the server");
});

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: ` can't find ${req.originalUrl} on this server! `,
  });
});

module.exports = app;
