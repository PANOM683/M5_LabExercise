// M5_LabExercise/controllers/calculatorController.js

function addNumbers(req, res) {
  const { num1, num2 } = req.query;
  const num1Num = parseInt(num1, 10);
  const num2Num = parseInt(num2, 10);
  const result = num1Num + num2Num;
  if (Number.isNaN(result)) {
    return res.status(400).json({
      error: "this input is not a number",
    });
  }
  res.json({ result: num1Num + num2Num });
}

module.exports = { addNumbers };
