const Exam = require("../models/imtixon_javob.model")

const create = async(req, res,) => {
    try {
        const {group_id, user_id,imtixon_javob} = req.body;

        const data = await Exam.create({group_id, user_id,imtixon_javob});

        res.json({data: data});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const find = async(req, res,) => {
    try {
        const data = await Exam.find({}).populate('group_id').populate('user_id')
        res.json({data: data })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const findOne = async(req, res,) => {
    try {
        const {id} = req.params

        const data = await Exam.findById({id: id}).populate('group_id').populate('user_id')
        res.json({data: data })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const update = async(req, res,) => {
    try {
        const {id} = req.params
        const {group_id,evaluation_id} = req.body;
        const data = await Exam.findByIdAndUpdate(id, {group_id, evaluation_id})
        res.json({data: data })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    create,
    find,
    findOne,
    update
}
