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
  ls.stdout.pipe(process.stdout);
});
console.log(`Now watching ${filename} for changes..`);
