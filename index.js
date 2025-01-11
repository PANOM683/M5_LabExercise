// Lab 5.1 which is Index and Index1
// Basic Back-End application with multiple web server index and index1 files

//Run this go to cd M5_LabExercise > npm start

const express = require("express");

const testRoutes = require("./routes/myTestRoutes");

// Exercise 5.2 Calculator Routes
const calculatorRoutes = require("./routes/calculatorRoutes");

const app = express();
//const app = require("./app");
const port = 3000;

// Exercise 5.3
app.use("/", express.static("public"));

app.use("/myOwnTest", testRoutes);

// Exercise 5.2 Calculator Routes
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}");
});

// Exercise 6.5
// All Routes and every test is working fine.
