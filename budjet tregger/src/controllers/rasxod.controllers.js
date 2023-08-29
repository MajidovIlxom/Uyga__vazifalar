const knex = require("../database")

const create = async(req, res) => {
    try {
        const {rasxod_category_name,raxod_wallet,rasxod_user_id} = req.body

        const data = await knex("rasxod").insert({rasxod_category_name, raxod_wallet, rasxod_user_id}).returning('*')

        res.json({message: data})

    } catch (error) {
        res.status(500).json({message: error.message})

    }
}
const find = async(req, res) => {
    try {
        const data = await knex("rasxod").select('*')
        res.json({data: data})
    } catch (error) {
        res.status(500).json({message: error.message})

    }
}


module.exports = {create, find}