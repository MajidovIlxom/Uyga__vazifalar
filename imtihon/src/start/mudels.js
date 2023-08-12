const fileupload = require('express-fileupload');
const cookie = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
const router = require('../api/router/index.routes');

const {swaggerSpec} = require("../swagger/opsion")
const modules = (app, express) => {

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileupload())
app.use(cookie());
app.use(express.static(process.cwd() + "/uploads"));

app.use("/api",router)
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = modules