const express = require('express');
const { isAuthenticated } = require('../config/restrictions');
const Animal = require('../models/Animal');
const Quarantine = require('../models/Quarantine');

const router = express.Router();

router.post('/create', isAuthenticated, async (req, res) => {
    const type = req.body.type,
        breed = req.body.breed,
        animalCount = req.body.animalCount,
        farmId = res.locals.farmModel._id;
    try {
        const animal = await Animal.findOne({ farm: farmId, type, breed });
        const isQurantined = await Quarantine.findOne({ animal: animal._id });
        if (isQurantined) {
            return res.json('The animal type and breed already are qurantined. You need to update it.');
        }

        const updatedAnimal = { activeCount: Number(animal.count) - Number(animalCount) };

        await Animal.findByIdAndUpdate(animal._id, updatedAnimal);
        const quarantine = await Quarantine.create({ animalCount, animal: animal._id, farm: farmId });
        res.send({ quarantine });
    } catch (err) {
        res.json(err);
    }
});

router.get('/all', isAuthenticated, async (req, res) => {
    const farmId = res.locals.farmModel._id;

    const quarantineAnimals = await Quarantine.find({ farm: farmId });
    res.send(quarantineAnimals);
});

router.delete('/:id', isAuthenticated, async (req, res) => {
    const quarantineId = req.params.id;

    const result = await Quarantine.deleteOne({ _id: quarantineId });
    res.send(result);
});

module.exports = router;
