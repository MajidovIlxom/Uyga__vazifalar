const AdminRouter =require("./admin.routes")
const UserRouter =require("./user.routes")
const GroupRouter =require("./group.routes")
const examRouter = require("./exam.routes")
const baxonRouter = require("./evaluation.routes")
const ExamCreateRouter =require("./examCreate.routes")
module.exports = [AdminRouter, UserRouter, GroupRouter, examRouter, baxonRouter, ExamCreateRouter]