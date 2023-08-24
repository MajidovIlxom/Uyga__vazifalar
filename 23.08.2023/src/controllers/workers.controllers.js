const { fetch, fetchOne } = require("../utils/pg");


const updateUser = async(req, res, )=> {
    try {
      const {fullname, email, password} = req.body; 
      const {id} = req.params
      const user = await fetchOne('update workers set fullname = $1 email = $2 password = $3 where worker_id = $4', fullname, email, password, id);
      res.status(200).json({message: "Success"});
    } catch (error) {
      res.status(500).json({message:error.message});  
    }
  }
  
const getAllUsers = async (req, res) => {
    const data = await fetchOne('select * from workers');
    res.status(200).json({message: data});
}

const rolesUpdate = async (req, res) => {
    const {id} = req.params
    const {role} = req.body
    const data = await fetch('update workers set role = $1 where  worker_id = $2 returning* ', role, id);
    res.status(200).json({message: data});
}

const updateUserdelete = async (req, res) => {
    const {id} = req.params
    if (!id) return res.status(404).json({message: "User not found"});
    await fetch('update workers from isactive = false where worker_id = $1', id)
}

module.exports = {updateUser, getAllUsers, updateUserdelete, rolesUpdate};