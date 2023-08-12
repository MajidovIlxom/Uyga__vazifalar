const jwt = require("../../utils/jwt");

const isAuth = async(req,res,next)=> {
    const token = req.cookies?.token
    if(!token) return res.status(401).json({message: "Invalid Token1"})
    jwt.verify(token, (err, data) => {
        if (err) return res.status(401).json({message: "Invalid Token2"});
        req.user = data; 
        next();
    })
}

module.exports = isAuth