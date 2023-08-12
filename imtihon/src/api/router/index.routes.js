const AdminRouter = require("./auth")
const Servic = require("./services")
const FeedBack = require("./feedback")
const Contact = require("./constact")
const Admin = require("./admin")

module.exports = [ AdminRouter, Servic, FeedBack, Contact,Admin]