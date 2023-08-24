const jwt = require("../utils/jwt");
const Joi = require("joi");
const { fetch, fetchOne } = require("../utils/pg");

const loginUser = async (req, res) => {
    try {
      const {email, password} = req.body;      

      const {error} = Joi.object({
        email: Joi.string().max(30).required(),
        password: Joi.string().min(6).required(),
      }).validate({email, password});
      
      if (error) return res.status(400).json({message: error.message});
      
      const newdata = await fetchOne('select * from workers where email = $1 and password = $2', email, password)
      if (newdata.length == 0) return res.status(400).json({message: 'not found'});
      
      const token = jwt.sign({id: newdata.worker_id});
      res.json({message:  token});

    } catch (error) {
      res.status(500).json({message: "INTERNAL SERVER ERROR"});
      console.log(error.message);
    }
  };

  const register = async (req, res) => {
    try {
      const { fullname, email, password } = req.body;
  
      const { error } = Joi.object({
        fullname: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().min(6).required(),
      }).validate({ fullname, email, password });
  
      if (error) return res.status(400).json({ message: error.message });
  
      const data = await fetchOne('insert into workers(fullname, email, password) values($1, $2, $3) returning*',
        fullname,
        email,
        password
      );
  
        const token = jwt.sign({ data: data.worker_id });
        res.status(201).json({ message: "Success", token: token });
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  

const getAllUsers = async(req, res, )=> {
  const user = await fetch("select * from workers");
  res.status(200).json({message: "Success", data: user })
}



module.exports = {loginUser, register, getAllUsers}
