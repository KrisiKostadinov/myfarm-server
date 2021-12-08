const jwt = require('jsonwebtoken');

isAuthenticated = (req, res, next) => {
    const token = req.header('authorization');
    
    jwt.verify(token, process.env.SECRET_JWT, async function (err, decoded) {
        if (err) {
            res.status(404).send('Invalid token');
        } else {
            res.locals.farmModel = decoded;
            next();
        }
    });
}

module.exports = {
    isAuthenticated
}