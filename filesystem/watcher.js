"use strict";
const fs = require("fs");

fs.watch(process.argv[2], () => console.log("File changed"));
console.log("Now watching target.txt for changes...");
