require("dotenv/config")

const {env} = process

const config ={
    port: env.port || 3000,
    DB_URL: env.DB_URL,
    jwtSecretKey: env.jwtSecretKey
}
module.exports = config