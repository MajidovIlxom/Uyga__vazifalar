const Joi = require("joi");
const bcrypt = require("bcrypt");
const User = require("../models/users.model"); // O'zgartirilgan model nomi
const { generateJwt } = require("../utils/jwt");

const register = async (req, res) => {
  try {
    const {fullname, username, password, email} = req.body

        const {error} = Joi.object({
          fullname: Joi.string().min(3).max(32).required(),
          username: Joi.string().required(),
          password: Joi.string().required(),
          email: Joi.string().required(),
        }).validate({
          fullname: fullname.trim(),
          username: username.trim(),
          password: password.trim(), 
          email: email.trim(), 
        })

    if (error) return res.status(400).json({ message: error.message });

    const existingUser = await User.findOne({
      where: {
        username: username.toLowerCase(),
      },
    });

    if (existingUser) return res.status(409).json({message: "Username already exists"});

    const hashedPass = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      fullname: fullname,
      username: username,
      password: hashedPass,
      email: email,
    });

    const token = generateJwt({ id: newUser.id });

    res.status(201).json({ message: "Success", data: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const { error } = Joi.object({
      username: Joi.string().max(32).required(),
      password: Joi.string().required(),
    }).validate({
      username: username?.trim(),
      password: password?.trim(),
    });

    if (error) return res.status(400).json({ message: error.message });

    const user = await User.findOne({
      where: {
        username: username.toLowerCase(),
      },
    });

    if (!user) return res.status(403).json({ message: "Invalid Username or password" });

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) return res.status(403).json({ message: "Invalid Username or password" });

    const token = generateJwt({ id: user.id });

    res.status(201).json({ message: "Success", data: token });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

module.exports = {
  register,
  login,
};
