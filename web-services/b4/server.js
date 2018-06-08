"use strict";
const express = require("express");
const morgan = require("morgan");
const nconf = require("nconf");
const pkg = require("./package.json");
const search = require("./lib/search.js");

const app = express();

nconf.argv().env("__");
nconf.defaults({ conf: `${__dirname}/config.json` });
nconf.file(nconf.get("conf"));

app.use(morgan("dev"));

app.get("/api/version", (req, res) => {
  res.status(200).send(pkg.version);
});

search(app, nconf.get("es"));

app.listen(nconf.get("port"), () => console.log("Ready!"));
