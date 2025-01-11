// Exercise 5.1
// another web server with 4000 port
// run this by npm run start:two

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World! Arav");
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:${port}");
});
