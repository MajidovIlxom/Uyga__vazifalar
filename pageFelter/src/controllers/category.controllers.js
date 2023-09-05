const category = require("../models/category.model")


const create =async(req, res) => {
    try {
        const {name} = req.body;
        const data =await category.create({name})
        res.status(200).json({message: data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const find =async(req, res) => {
    try {
        const data = await category.find()
        res.json({message: data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const findOne =async(req, res) => {
    try {
        const {id} =req.params
        const data = await category.find({id})
        res.json({message: data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {create, find, findOne}