require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const configViewEngine = require("./config/viewEngine");
const initWebRoutes = require("./routes/web");

let app = express();

// use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view engine
configViewEngine(app);

// init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running at PORT: ${port}`)
})
