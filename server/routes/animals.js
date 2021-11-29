const express = require('express');
const Animal = require('../models/Animal');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/create', async (req, res, next) => {
    const { type, count } = { ...req.body };
    const token = req.header('authorization');

    jwt.verify(token, process.env.SECRET_JWT, async function (err, decoded) {
        if (err) {
            res.status(404).send('Invalid token');
        } else {
            console.log(decoded);
            const animal = await Animal.create({ type, count, farm: decoded._id });
            res.send(animal);
        }
    });
});

module.exports = router;