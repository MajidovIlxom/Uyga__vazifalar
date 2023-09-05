const express = require('express')
const config = require('../config')
const routes = require("./router")
const { connect } = require('mongoose')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", routes)

const bootstrap = async () => {
    await connect(config.DB_URL)
    
    
    app.listen(config.port, ()=> {
    console.log('config.port: ', config.port);

    })
}

bootstrap()