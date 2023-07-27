const Io = require("../utils/io");
const readOrWrite = new Io("./database/user.json")

const isfrom = async (req, res, next) => {
    const fromId = req.headers.from
    const user = await readOrWrite.read()
    const findFrom = user.find((user)=>user.id == fromId)
    if (findFrom) {
        req.id = fromId
        next()
    } else {
        res.status(403).json({message: "from topilmadi"})
    }
}
module.exports = isfrom