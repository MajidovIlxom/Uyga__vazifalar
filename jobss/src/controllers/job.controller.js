const Job = require('../models/job.model')


const create = async(req, res) => {
    try {
        const {Company,job_name,skills,It_important_to_us, Resumes} =req.body
        const data = await Job.create({Company,job_name,skills,It_important_to_us,Resumes});
        console.log('data: ', data);

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const find = async(req, res) => {
    try {
        const {Company,job_name,skills}= req.query
        const filter  = {};
        if (Company){
            filter.Company = Company
        };
        if (job_name){
            filter.job_name = job_name
        };
        if (skills){
            filter.skills = skills
        };


        const data = await Job.find(filter)

        res.status(200).json({message: data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const findOneNO = async(req, res) => {
    try {
        const {id} = req.params
        const data = await Job.findOne({ _id: id }).populate("Resumes");
        console.log('data: ', data);

        res.status(200).json({message: data })
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}

module.exports = {
    create,
    find,
    findOneNO
}