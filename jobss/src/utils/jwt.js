const {sign, verify} = require("jsonwebtoken");

const {jwtSecretKey} = require("../../config");



function generateJwt(payload) {
    return sign(payload, jwtSecretKey)    
}

function extractJwt(payload, callback) {
    return verify(payload, jwtSecretKey, callback)    
}

module.exports = {generateJwt, extractJwt}