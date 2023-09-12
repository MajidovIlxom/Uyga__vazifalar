const exam = require('../models/examCreate.model')

const create = async(req,res) => {
    try {
        const {group_id, deadline} = req.body;
        const file = req.imageName
        const data = await exam.create({group_id, deadline, exam_file: file});
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const find = async(req,res) => {
    try {
        const data = await exam.find({}).populate("group_id")
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const findOne = async(req,res) => {
    try {
        const {id} = req.params
        const data = await exam.findById({_id: id}).populate("group_id")
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const update = async(req,res) => {
    try {
        const { id } = req.params
        const file = req.imageName
        const data = await exam.findByIdAndUpdate(id, {file})

        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    create,
    find,
    findOne,
    update,
}