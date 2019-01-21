const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.send("Oh, noes. You took a wrong turn. 404");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
