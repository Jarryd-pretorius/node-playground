const express = require("express");
const { readFile } = require("fs").promises;
const app = express();

const port = process.env.PORT || 3000;

app.get("/", async (request, response) => {
  response.send(await readFile("./home.html", "utf8"));
});

app.listen(port, () => {
  console.log("server Started");
});
