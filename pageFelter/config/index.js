require("dotenv/config")

const {env} = process

const config = {
    port: env.port,
    DB_URL: env.DB_URL
}

module.exports = config