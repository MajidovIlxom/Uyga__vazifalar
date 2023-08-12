const express = require("express");
const app = express();

require("./start/mudels")(app, express);
require("./start/run")(app);