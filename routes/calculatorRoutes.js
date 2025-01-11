// Exercise 5.2 Calculator Routes

// Multiplication, Division, Subtraction, and Addition
// first open terminal and run npm start to start localHost 3000

const express = require("express");
const router = express.Router();

// Exercise 5.5
const { addNumbers } = require("../controllers/calculatorController");

// Exercise 5.5
router.get("/add", (req, res) => addNumbers(req, res));

//to test this route, write http://localhost:3000/calculator/add?num1=anyNumber&num2=anyNumber
router.get("/add", (req, res) => {
  const { num1, num2 } = req.query;
  const num1Num = parseInt(num1, 10);
  const num2Num = parseInt(num2, 10);
  res.send(`${num1Num + num2Num}`);
});

//to test this route, write http://localhost:3000/calculator/subtract?num1=anyNumber&num2=anyNumber
router.get("/subtract", (req, res) => {
  const { num1, num2 } = req.query;
  const num1Num = parseInt(num1, 10);
  const num2Num = parseInt(num2, 10);
  res.send(`${num1Num - num2Num}`);
});

//to test this route, write http://localhost:3000/calculator/multiply?num1=anyNumber&num2=anyNumber
router.get("/multiply", (req, res) => {
  const { num1, num2 } = req.query;
  const num1Num = parseInt(num1, 10);
  const num2Num = parseInt(num2, 10);
  res.send(`${num1Num * num2Num}`);
});

//to test this route, write http://localhost:3000/calculator/divide?num1=anyNumber&num2=anyNumber
router.get("/divide", (req, res) => {
  const { num1, num2 } = req.query;
  const num1Num = parseInt(num1, 10);
  const num2Num = parseInt(num2, 10);
  res.send(`${num1Num / num2Num}`);
});

module.exports = router;
