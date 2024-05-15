const express = require("express");
const Meuble = require("./models/meubleModel");

const app = express();

app.use(express.json());
app.get("/api/meubles", async (req, res) => {
  try {
    const meubles = await Meuble.find();
    res.status(200).json({
      status: "success",
      results: meubles.length,
      data: {
        meubles,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
});
app.get("/api/meubles/:id", async (req, res) => {
  try {
    const meubles = await Meuble.findById(req.params.id);

    res.status(200).json({
      status: "success",

      data: {
        meubles,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
});
app.post("/api/meubles", async (req, res) => {
  try {
    const newMeuble = await Meuble.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        meuble: newMeuble,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error",
    });
  }
});

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: ` can't find ${req.originalUrl} on this server! `,
  });
});

module.exports = app;
