const Io = require('../../utils/io')
const Servic = new Io("./database/servic.json");

const servicmodel = require("../../models/servic.model")

const creatServic = async(req, res) => {
    try {
        const {title,description} = req.body
        const photo = req.imageName;
        const servic = await Servic.read()
        
        const id = (servic[servic.length - 1]?.id || 0) + 1;
        const newservic = new servicmodel(id, photo, title, description)
        
        const data = servic.length ? [...servic,newservic] : [newservic]
        await Servic.write(data)
        res.status(200).json({message: "Success"})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "server error"})
    }
}

const getAllser = async(req, res) => {
    const getservic = await Servic.read()
    
    const data = getservic.filter(servic => servic.status == true)
    res.json({message: data})
}

const getById = async(req, res) => {
    const {id} = req.params;
    const servic = await Servic.read();

    const data = servic.find((p) => p.id == id);
    if(!data.status == true) return res.status(404).json({message: "Not Found"});
    
    res.json({message: data});
}

const putServic = async(req, res) => {
    const {id} = req.params;
    const {title, description} = req.body;
    const servic = await Servic.read()

    const data = servic.find((p) => p.id == id);

    if (!data) return  res.status(404).json({message: "Not Found"});

    data.title = title; 
    data.description = description;

    await Servic.write(servic);
    res.status(200).json({message: "OK"});
}

const remove = async(req, res) => {
  const {id} = req.params;
  const servic = await Servic.read();

  const filter = servic.find((p) => p.id == id);
  filter.status = false
  await Servic.write(servic);
  res.json({message: "Deleted"});
}

module.exports = {creatServic, getAllser, getById, putServic, remove}