const express = require("express");

const testRoutes = require("./routes/myTestRoutes");

const calculatorRoutes = require("./routes/calculatorRoutes");

const app = express();

app.use(express.json());
app.use("/", express.static("public"));

app.use("/myOwnTest", testRoutes);

app.use("/calculator", calculatorRoutes);

module.exports = app;
