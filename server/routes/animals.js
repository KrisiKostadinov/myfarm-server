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

router.get('/all/type/:type', isAuthenticated, async (req, res) => {
    const type = req.params.type;
    const farmId = res.locals.farmModel._id;

    const allOfTypeAnimals = await Animal.find({ farm: farmId, type });
    res.send(allOfTypeAnimals);
});

router.get('/all/breed/:breed', isAuthenticated, async (req, res) => {
    const breed = req.params.breed;
    const farmId = res.locals.farmModel._id;

    const allOfBreedAnimals = await Animal.find({ farm: farmId, breed });
    res.send(allOfBreedAnimals);
});

router.delete('/:id', isAuthenticated, async (req, res) => {
    const id = req.params.id;

    const deletedAnimal = await Animal.findByIdAndDelete(id);
    res.send(deletedAnimal);
});

module.exports = router;