const result = require('../models/result.model')


const resultcreate = async(req, res) => {
    try {
        const {imtihon_id,evaluation_id,examsCreate_id} = req.body;
        // const data = await result.



    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const resultfind = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const resultupdate = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = { 
    resultcreate,
    resultfind,
    resultupdate
}