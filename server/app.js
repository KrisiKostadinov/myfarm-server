const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('dotenv').config();

const indexRouter = require('./routes/index');
const farmsRouter = require('./routes/farms');
const animalsRouter = require('./routes/animals');
const quarantinesRouter = require('./routes/quarantines');
const quarantinedAnimalDetailsRouter = require('./routes/quarantinedAnimalDetails');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/farms', farmsRouter);
app.use('/animal', animalsRouter);
app.use('/quarantine', quarantinesRouter);
app.use('/quarantine/details', quarantinedAnimalDetailsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  res.status(err.status || 500);
  res.render('error');
});

require('./config/db');

module.exports = app;
