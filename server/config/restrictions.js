const jwt = require('jsonwebtoken');
const { secret_jwt } = require('./configuration');

isAuthenticated = (req, res, next) => {
    const token = req.header('authorization');
    
    jwt.verify(token, secret_jwt, async function (err, decoded) {
        if (err) {
            console.log(err);
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