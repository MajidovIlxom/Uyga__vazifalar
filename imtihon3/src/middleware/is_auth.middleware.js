const jwt = require('../utils/jwt');

const isAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]??req.headers.authorization
        if (!token) return res.status(401).json({message: err.message});
        jwt.verifyToken(token, (err, result) => {
            if (err)return res.status(401).json({message: err.message});
            req.verify = result
            next();
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = isAuth;