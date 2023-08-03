const bcrypt = require("bcrypt");
const jwt = require("../../utils/jwt");
const Joi = require("joi");

const cookie = require("cookie-parser");

const io = require("../../utils/io")
const Users = new io("./database/users.json")

const User = require("../../models/register.model")

const login = async (req, res) => {
  try {
    const {email, passwordd} = req.body;
    
    const emailRegex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
    
    const schema = Joi.object({
      email: Joi.string().regex(emailRegex).min(10).max(30).required(),
      passwordd: Joi.string().min(6).required(),
    });
    
    const {error} = schema.validate({email,passwordd});
    
    if (error) return res.status(400).json({message: error.message});
    const users = await Users.read();
    
    const user = users.find(user => user.email === email);

    if (!user) return res.status(403).json({message: "Email not found"});

    const compare = await bcrypt.compare(passwordd, user.password);
    if (!compare) return res.status(403).json({message: "Incorrect password"});

    const token = jwt.sign({id: user.id});

    res.cookie("token",token)
    res.redirect("/api");

  } catch (error) {
    res.status(500).json({message: "INTERNAL SERVER ERROR"});
    console.log(error.message);
  }
};

const register = async (req, res) => {
  try {
    const {email, fullName, password} = req.body;
    const photo = req.imageName
    const schema = Joi.object({
      email: Joi.string().required(),
      fullName: Joi.string().min(3).max(32).required(),
      password: Joi.string().min(6).required(),
      
    });
    
    const {error} = schema.validate({
      email,
      fullName,
      password,
    });
    
    if (error) return res.status(400).json({message: error.message});
    
    const users = await Users.read();
    const user = users.find((user) => user.email == email);
    if (user)
    return res.status(403).json({message: "Email already exists"});
    
    const id = (users[users.length - 1]?.id || 0) + 1;
    
    const hashedPass = await bcrypt.hash(password, 12);
    
    
    const newUser = new User(id, email, fullName, hashedPass, photo);
    
    const data = users.length ? [...users, newUser] : [newUser];
    
    await Users.write(data);

    const token = jwt.sign({id: newUser.id});
    res.cookie("token",token)
    res.redirect("/api")
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: "INTERNAL SERVER ERROR"});
  }
};

module.exports = {
  login,
  register,
};
