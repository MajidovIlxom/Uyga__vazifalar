const express = require('express');
const config = require('../config');
const app = express();
const router = require('./router');

app.use(express.json());

app.use("/api", router)



app.listen(config.PORT, ()=> {
    console.log(config.PORT);
})