const admins = require('../models/admin.model');
const { generateToken } = require('../utils/jwt');

const login = async(req, res) => {
    try {
        const {username, password} = req.body;

        const data = await admins.findOne({username});  // bazaga default kirgizilagi admin

        if(data.username !== username)
        {return res.status(401).json({message: "username  or password incorrect"})};
        if(data.password !== password) 
        {return res.status(401).json({message: "username  or password incorrect"})};

        const token = generateToken({_id: data.id})

        res.status(200).json({message: "token is valid", token})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = login;