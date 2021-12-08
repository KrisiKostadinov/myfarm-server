var express = require('express');
var router = express.Router();
const { isAuthenticated } = require('../config/restrictions');
const QuarantinedAnimalDetails = require('../models/QuarantinedAnimalDetails');

router.post('/:animalId', isAuthenticated, async (req, res) => {
    const   description = req.body.description,
            amount = req.body.amount,
            farmId = res.locals.farmModel._id,
            animalId = req.params.animalId;

    const quarantinedAnimalDetailsModel = {
        description,
        amount,
        farm: farmId,
        animal: animalId
    }

    const quarantinedAnimalDetails = await QuarantinedAnimalDetails.create(quarantinedAnimalDetailsModel);
    res.send(quarantinedAnimalDetails);
});

router.delete('/:id', isAuthenticated, async (req, res) => {
    const id = req.params.id;

    const deletedDetails = await QuarantinedAnimalDetails.deleteOne({ _id: id });
    res.send(deletedDetails);
});

module.exports = router;
