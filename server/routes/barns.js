const express = require('express');
const { isAuthenticated } = require('../config/restrictions');
const Barn = require('../models/Barn');

const router = express.Router();

router.post('/create', isAuthenticated, async (req, res) => {
    const   farm = res.locals.farmModel._id,
            animal = req.body.animalId,
            name = req.body.name;

    const barn = await Barn.create({ name, farm, animal });
    res.send(barn);
});

router.delete('/:id', isAuthenticated, async (req, res) => {
    const id = req.params.id;

    try {
        await Barn.findByIdAndDelete(id);
        res.send(barn);
    } catch(err) {
        return res.send(err);
    }
});

module.exports = router;