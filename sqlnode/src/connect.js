const pg = require('pg');
require("dotenv/config");

const pool = new pg.Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

async function fetch1(SQL, params) {
    const client = await pool.connect();
    try {
        const { rows } = await client.query(SQL, params);
        return rows;
    } catch (error) {
        console.log("Ma'lumotlar omboriga so'rovni bajarmoqda xatolik yuz berdi:", error);
        throw error;
    } finally {
        await client.release();
    }
}


module.exports = {
    fetch1
};
