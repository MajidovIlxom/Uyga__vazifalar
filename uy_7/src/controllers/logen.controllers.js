const jwt = require("../utils/jwt");
const Joi = require("joi");
const { fetch, fetchOne } = require("../utils/pg");

const loginUser = async (req, res) => {
    try {
      const {username, password} = req.body;      

      const {error} = Joi.object({
        username: Joi.string().min(1).max(30).required(),
        password: Joi.string().min(6).required(),
      }).validate({username, password});
      
      if (error) return res.status(400).json({message: error.message});
      
      const newdata = await fetchOne('select * from users where username = $1 and password = $2', username, password)
      if (newdata.length == 0) return res.status(400).json({message: 'not found'});
      
      const token = jwt.sign({id: newdata.user_id});
      res.json({message:  token});

    } catch (error) {
      res.status(500).json({message: "INTERNAL SERVER ERROR"});
      console.log(error.message);
    }
  };


const register = async(req, res) => {
  try {
    const {name, password, username, balance} = req.body

    const { error } = Joi.object({
      name: Joi.string().required(),
      username: Joi.string().max(255).required(),
      balance: Joi.number().required(),
      password: Joi.string().min(6).required(),
    }).validate({ name, username, balance, password });

    if (error) return res.status(400).json({ message: error.message });

    const data = await fetchOne('insert into users(name, username, balance, password)values($1, $2, $3, $4) returning*',
    name,
    username,
    balance,
    password,
    )
    const token = jwt.sign({data: data.user_id})
    console.log('token: ', token);
    res.status(201).json({message: "Success", token: token});

  } catch (error) {
    res.status(500).json({message: error});
  }
}

const getAllUsers = async(req, res, )=> {
  const user = await fetch("select * from users");
  res.status(200).json({message: "Success", data: user })
}


module.exports = {loginUser, register, getAllUsers}