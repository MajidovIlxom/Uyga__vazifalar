const Group = require("../models/grups.model")


const create = async (req, res) => {
    try {
        const { name, user_id, description } = req.body;

        const data = await Group.create({ name: name, user_id: user_id, description: description });

        res.status(200).send({ message: data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const find = async(req, res) => {
    try {
        const data = await Group.find().populate("user_id")
        
        res.status(200).send({ message: data });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const findOne = async(req, res) => {
    try {
        const {id}= req.params;
        const data = await Group.findOne({ _id: id}).populate("user_id");
        res.status(201).send({ message: data });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const update = async(req, res) => {
    try {
        const {id} = req.params;
        const {name, description} = req.body;
        const data = await Group.findByIdAndUpdate(id, {name, description})
        res.json({message: data})
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