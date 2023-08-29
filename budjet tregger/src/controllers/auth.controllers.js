const knex = require('../database');
const Joi = require('joi');
const bcrypt = require('bcrypt');

const register = async(req,res)=>{
    try {
        const {full_name, email, password, user_wallet} =req.body
        
        const findUser = await knex('users').select('*').where({full_name}).first();

        if (findUser) return res.status(403).json({message: 'User already exists'});

        
        const {error} = Joi.object({
            full_name: Joi.string().min(4).max(32).required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
            user_wallet: Joi.number().required()
        }).validate({full_name, email, password, user_wallet})

        if (error)return res.status(400).json({message: error.message})
        
        const hashedPass = await bcrypt.hash(password ,12) 

        const [data] = await knex('users').insert({full_name, email, password: hashedPass, user_wallet}).returning("*");


        res.status(201).json({message: 'Success'})


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const logen = async(req,res)=>{
    try {
        const {email, password} = req.body;

        const findUser = await knex("users").select("*").where({email}).first();
        if (!findUser)
        return res.status(403).json({message: "Invalid username or password"});

        const pass = await bcrypt.compare(password, findUser.password);

        if (!pass)
        return res.status(403).json({message: "Invalid username or password"});
        res.status(200).json({message: "Success"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {register, logen}