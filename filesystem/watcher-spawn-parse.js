"use strict";
const fs = require("fs");
const spawn = require("child_process").spawn;
const filename = process.argv[2];

if (!filename) {
  throw Error("A file must be specified!");
}
fs.watch(filename, () => {
  const args = ["-l", "-h"];
  const ls = spawn("ls", [...args, filename]);
  let output = "";

  ls.stdout.on("data", chunk => (output += chunk));

  ls.on("close", () => {
    const parts = output.split(/\s+/);
    console.log([parts[0], parts[4], parts[8]]);
  });
});
console.log(`Now watching ${filename} for changes..`);
