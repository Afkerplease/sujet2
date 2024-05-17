const express = require("express");
const Meuble = require("./models/meubleModel");
const meubleRouter = require("./routes/meublesRoutes");

const app = express();
app.use(express.json());

app.use(express.json());
app.use("/api/meubles", meubleRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: ` can't find ${req.originalUrl} on this server! `,
  });
});

module.exports = app;
