const jwt = require("jsonwebtoken");
const config = require(process.cwd() + "/config/index");

const secretKey = config.jwtSecretKey

const sign = (payload) => jwt.sign(payload, secretKey, {expiresIn: "3h"});
const verify = (payload, callback) => jwt.verify(payload, secretKey, callback);

module.exports = {
  sign,
  verify,
};
