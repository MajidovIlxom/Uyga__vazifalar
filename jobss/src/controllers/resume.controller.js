const Resume = require('../models/resume.model')

const create = async(req, res) => {
    try {
        const {fullname,skills,Experience,Project,Education,Languages} = req.body
        const data = await Resume.create({fullname,skills,Experience,Project,Education,Languages});

        
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const find = async(req, res) => {
    try {
        const {skills,Experience, Languages} = req.query
        const filter = {};

        if (skills){
            filter.skills = skills
        };
        if (Experience){
            filter.Experience = Experience
        };
        if (Languages){
            filter.Languages = Languages
        };


        const data = await Resume.find(filter)
        res.status(200).json({message: data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    create,
    find
}