"use strict";
const fs = require("fs");
fs.writeFile("target.txt", " - Great job!", err => {
  if (err) {
    throw err;
  }
  console.log("File saved!");
});
