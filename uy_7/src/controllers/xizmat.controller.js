const { fetch, fetchOne } = require("../utils/pg")


const xizmatCreate = async(req,res) => {
    const {name, price} = req.body
    const id = req.user.data
    await fetchOne('insert into xizmat(name, price, user_id) values ($1, $2, $3)',name, price, id)

    res.status(200).json({message: "success"})

}


const xizmatGet = async(req, res) => {
    const data = await fetchOne('select * from xizmat')

    res.status(200).json({data:  data })
}


module.exports = {xizmatCreate, xizmatGet}