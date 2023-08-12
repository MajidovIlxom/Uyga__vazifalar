const Io = require('../../utils/io')
const Contsct = new Io("./database/cantactad.json");

const getAllAdmin = async(req,res) => {
    const contac = await Contsct.read()
    const data = contac.filter(contact => contact.status === "waiting")
    res.json(data)
  }
  

const Checkcontact = async(req, res) => {
    const {id} = req.params
    const {qaror} = req.body
    const contac = await Contsct.read()

    const data = contac.find((contact)=>contact.id == id)
    
    data.status = qaror || "bekor"
    
    await Contsct.write(contac)
    res.status(200).json({message: "OK"})
}
module.exports = {
    getAllAdmin,
    Checkcontact
}