const jwt = require("jsonwebtoken");
const config1 = require("../../config/index");

const secretKey = config1.jwtSecretKey

const sign = (payload) => jwt.sign(payload, secretKey);
const verify = (payload, callback) => jwt.verify(payload, secretKey, callback);

module.exports = {
  sign,
  verify,
};