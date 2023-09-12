const Admin = require("../models/admin.model")

const isAdmin = async (req, res, next) => {
  try {
    const id = req.verify;
    const user = await Admin.findById(id);
    if (!user.isAdmin) return res.status(403).json({message: "Permission denied"});
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isAdmin;
