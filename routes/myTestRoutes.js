// Test Routes

const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("This is test routes");
});

router.get("/test2", (req, res) => {
  res.send("this is test 2");
});

module.exports = router;
