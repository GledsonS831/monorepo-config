const express = require("express");

const app = express();

app.get("/", () => {
  console.log("route 1");
});

app.listen(3333, () => {
  console.log("server running");
});
