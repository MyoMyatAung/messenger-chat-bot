const express = require("express");

/**
 * config view engine for node app
 * @param {express.Application} app
 */

let configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
