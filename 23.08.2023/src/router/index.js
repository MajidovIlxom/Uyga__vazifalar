const register = require("../router/register.routes")
const Categore = require("../router/category.routes")
const productCreate = require("../router/product.routes")
const updateUser = require("../router/workers.routes")
 


module.exports = [register, Categore, productCreate, updateUser]