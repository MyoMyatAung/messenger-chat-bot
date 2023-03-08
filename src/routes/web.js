const express = require("express");
const { postWebHook, getWebHook } = require("../controllers/chatBotController");
const { getHomePage } = require("../controllers/homepageController");
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.post("/webhook", postWebHook);
  router.get("/messaging-webhook", getWebHook);
  return app.use("/", router);
};

module.exports = initWebRoutes;
