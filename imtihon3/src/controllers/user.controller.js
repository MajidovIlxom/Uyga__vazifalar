const User = require('../models/users.model')
const bcrypt = require("bcrypt")

const create = async(req, res) => {
    try {
        const {fullname,username,password,email,status} = req.body;

        const hashedpass = await bcrypt.hash(password, 12)
        
        const data = await User.create({fullname: fullname, username: username, password: hashedpass, email: email, status: status})

        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const find = async(req, res) => {
    try {
        const data = await User.find()
        res.status(200).json({message: data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const findOne = async(req, res) => {
    try {
        const {id}= req.params
        const data = await User.findOne({_id: id})
        res.status(200).json({message: data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const update = async(req, res) => {
    try {
        const {status}= req.body
        const id = req.params.id.trim()

        const data = await User.findByIdAndUpdate(id, {status})
        
        res.status(200).json({message: data})
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