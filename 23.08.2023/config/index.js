require('dotenv/config');

const {env} = process;

const config = {
    PORT: env.port || 3000,
    DB_URL: env.DB_URL,
    jwtSecretKey: env.JWT_SECRET_KEY,
}

module.exports = config;




