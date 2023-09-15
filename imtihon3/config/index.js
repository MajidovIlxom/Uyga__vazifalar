require("dotenv/config")

const { env } = process;

const config = {
    port: env.port || 3000,
    dburl: env.DB_URL,
    jwtSekret: env.JWT_SECRET
}

module.exports = config