const express = require('express');
const Animal = require('../models/Animal');
const { isAuthenticated } = require('../config/restrictions');

const router = express.Router();

router.post('/create', isAuthenticated, async (req, res) => {
    const { type, count, breed } = { ...req.body };

    const animal = await Animal.create({ type, count, activeCount: count, farm: res.locals.farmModel._id, breed });
    res.send(animal);
});

router.get('/all', isAuthenticated, async (req, res) => {
    const farmId = res.locals.farmModel._id;
    const allAnimals = await Animal.find({ farm: farmId });
    res.send(allAnimals);
});

router.delete('/:id', isAuthenticated, async (req, res) => {
    const id = req.params.id;

    const deletedAnimal = await Animal.deleteOne({ _id: id });
    res.send(deletedAnimal);
});

module.exports = router;