const knex = require("../database")

const creatCategory = async(req, res) => {
    try {
        const {category_name,rasxod_category_id,daxot_category_id} = req.body
        const data = await knex("category").insert({category_name,rasxod_category_id,daxot_category_id}).returning('*')

        res.json({data})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const find = async(req, res) => {
    try {
        const data = await knex("category").select("*")
        res.json({data})
    } catch (error) {
        res.status(500).json({message: error.message})

    }
}
module.exports = {creatCategory, find}