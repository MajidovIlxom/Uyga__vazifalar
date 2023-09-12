require('dotenv').config(); // .env faylidan o'qish

const swaggerJsDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info:{
        title: "Servece xizmatlar ko'rsatish Imtixon uchun",
        version: "1.0.0",
        description: "Ikkinchi oyning imtihoni uchun yozilgan swagger",
        servers: ["http://localhost:4000"
            // {
            //     url: process.env.DB_URL, // MongoDB manzili .env faylidan o'qiladi
            //     description: "Local Development Server" // Tavsif
            // }
        ], 
    }
};

const options = {
    swaggerDefinition, 
    apis: ["/src/swagger/*.swagger.js"]  // swagger turgan papkadagi routerlarni ishlatadigan joylarni berish
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerSpec };
