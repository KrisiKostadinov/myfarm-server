const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Farm = require('../models/Farm');
const { isAuthenticated } = require('../config/restrictions');
const config = require('../config/configuration');

const router = express.Router()

router.post('/register', async (req, res, next) => {
  var username = req.body.username,
    password = req.body.password,
    email = req.body.email;

  const farmFromDb = await Farm.findOne({ email });

  if (farmFromDb) {
    return res.status(208).send({ message: 'This email already exists!' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const farm = await Farm.create({ username, password: hashPassword, email });

  const token = jwt.sign({ username, email, _id: farm._id }, config.secret_jwt, { expiresIn: '1h' });

  res.send({ token: token });
});

router.post('/login', async (req, res, next) => {
  var email = req.body.email,
    password = req.body.password;

  const farmFromDb = await Farm.findOne({ email });

  if (!farmFromDb) {
    return res.status(208).send({ message: 'This email or password is wrong!' });
  }

  const isCompares = await bcrypt.compare(password, farmFromDb.password);

  if (isCompares) {
    const token = jwt.sign({ username: farmFromDb.username, email, _id: farmFromDb._id }, config.secret_jwt, { expiresIn: '1h' });
    return res.send({ username: farmFromDb.username, email: farmFromDb.email, token: token });
  }

  return res.status(208).send({ message: 'This email or password is wrong!' });
});

router.get('/verify', (req, res, next) => {
  const token = req.header('authorization')
  jwt.verify(token, config.secret_jwt, function (err, decoded) {

    if (err) {
      res.status(404).send('Invalid token');
    } else {
      res.send(decoded);
    }
  });
});

router.post('/food', isAuthenticated, (req, res) => {
  const farmId = res.locals.farmModel._id,
    food = req.body.food;

  Farm.findOneAndUpdate({ _id: farmId }, { $set: { food } }, { new: true }, (err, doc) => {
    if (err) {
      return res.send(err);
    }

    res.send(doc);
  });
});

module.exports = router;
