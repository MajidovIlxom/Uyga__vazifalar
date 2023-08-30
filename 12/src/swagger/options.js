const swaggerJSDog = require("swagger-jsdoc")


const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "кинопоиск",
        version: "1.0.0",
        description: "Bunda eng so'ngi kinolarni uzingiz sotib olib kurishingiz mumkin uyga vazifa uchun berilgan ",
        servers: ["http://localhost:4000"],
    },
};

const options = {
    swaggerDefinition,
    apis: ["src/swagger/*.swagger.js"],
};

const swaggerSpec = swaggerJSDog(options);

module.exports = {swaggerSpec};