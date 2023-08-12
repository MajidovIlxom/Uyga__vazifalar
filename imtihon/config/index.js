require("dotenv/config")

const {env} = process

const config ={
    port: env.port || 3000,
    jwtSecretKey: env.JWT_SECRET_KEY,

}

module.exports = config