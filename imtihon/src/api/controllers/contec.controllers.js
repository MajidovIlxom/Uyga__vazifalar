const Joi = require("joi")


const Io = require('../../utils/io')
const Contsct = new Io("./database/cantactad.json");


const contact = require("../../models/contec.model")

const createContac = async(req, res) => {
    const {name, phoneNumber,email, messageUser} = req.body
    const sxema = Joi.object({
      name: Joi.string().min(3).max(18).required(),
      phoneNumber: Joi.string().min(9).max(13).required(),
      email: Joi.string().min(6).max(18).required(),
      messageUser: Joi.string().min(1).max(12000000)
    })

    const {error} = sxema.validate({name, phoneNumber, email, messageUser})

    if (error) return res.status(400).json({message: message.error})
    const contac = await Contsct.read()
    const id = (contac[contac.length - 1]?.id || 0) + 1;
    
    const status = "waiting"
    const newContact = new contact(id,name,phoneNumber,email, messageUser,status)
    const data = contac.length ? [...contac, newContact] : [newContact]
    await Contsct.write(data)
    res.status(200).json({ message: "success"})
}



module.exports = {createContac}