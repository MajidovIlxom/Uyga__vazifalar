const express = require('express');
const fileUpload = require('express-fileupload');
const { connect } = require('mongoose');
const cors = require('cors')

const swaggerUi = require('swagger-ui-express');
const {swaggerSpec} = require("../swagger/opsion")


const config = require('../config');
const routes = require('./router')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());
app.use(express.static(process.cwd() + "/uploads"));
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", routes)

const run = async()=>{
    await connect(config.dburl);
    console.log("Connected to db...");

    app.listen(config.port,()=>{
        console.log('config.port: ', config.port);
    })
};
run()