const jwt = require("../../utils/jwt");

const isAuth = async(req,res,next)=> {
    const token = req.cookies?.token
    if(!token) res.redirect("/api/login")
    jwt.verify(token, (err, data) => {
        if (err) return res.status(401).json({message: "Invalid Token"});
        req.user = data;
        next();
    })
}

module.exports = isAuth