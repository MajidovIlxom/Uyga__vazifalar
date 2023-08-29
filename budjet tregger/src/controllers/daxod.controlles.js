const knex = require("../database")


const create = async(req,res) =>{
    try {
        const {daxod_wallet,daxod_category_name,daxod_user_id} = req.body
        
        const data = await knex("daxod").insert({daxod_wallet,daxod_category_name,daxod_user_id}).returning('*');
        res.json({data: data})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const find = async(req,res) =>{
    try {
        const data = await knex("daxod").select('*')
        res.json({data: data });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    create,
    find
}