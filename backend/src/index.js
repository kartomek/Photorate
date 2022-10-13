const express = require('express');
//import logger from "./helpers/logger";
const { initializeRouter, initializeEndRoute } = require("./config/endpoints");
const initializeCors = require("./config/cors");
const initializeBodyParser = require( "./config/bodyParser");

const port = 3001;

let app = express();

app = initializeCors(app);
app = initializeBodyParser(app);
app = initializeRouter(app);
app = initializeEndRoute(app);

app.listen(port);