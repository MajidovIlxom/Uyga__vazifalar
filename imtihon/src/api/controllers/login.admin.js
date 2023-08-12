const jwt = require("../../utils/jwt");
const Joi = require("joi");

const cookie = require("cookie-parser");

const io = require("../../utils/io")
const Users = new io("./database/admin.json")


const adminLogin = async (req, res) => {
    try {
      const {email, password} = req.body;
      console.log('req.body;: ', req.body);
      
      const emailRegex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      const schema = Joi.object({
        email: Joi.string().regex(emailRegex).min(10).max(30).required(),
        password: Joi.string().min(6).required(),
      });
      
      const {error} = schema.validate({email,password});
      
      if (error) return res.status(400).json({message: error.message});
      const users = await Users.read();
      
      const user = users.find(user => user.email === email);
      console.log('user: ', user);

  
      if (!user) return res.status(403).json({message: "Email not found"});
  
      if (user.password != password) return res.status(403).json({message: "Incorrect password"});
  
      const token = jwt.sign({id: user.id});
  
      res.cookie("token",token)
      res.json({message:  token});
    } catch (error) {
      res.status(500).json({message: "INTERNAL SERVER ERROR"});
      console.log(error.message);
    }
  };

module.exports = adminLogin