'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Reading = mongoose.model('Reading'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a reading
 */
exports.create = function (req, res) {
  var reading = new Reading(req.body);
  reading.user = req.user;

  reading.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(reading);
    }
  });
};

/**
 * Show the current reading
 */
exports.read = function (req, res) {
  res.json(req.reading);
};

/**
 * Update a reading
 */
exports.update = function (req, res) {
  var reading = req.reading;

  reading.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(reading);
    }
  });
};

/**
 * Delete a reading
 */
exports.delete = function (req, res) {
  var reading = req.reading;

  reading.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(reading);
    }
  });
};

/**
 * List of Readings
 */
exports.list = function (req, res) {
  Reading.find().sort('-created').populate('user', 'displayName').exec(function (err, readings) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(readings);
    }
  });
};

/**
 * Readings middleware
 */
exports.readingByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Reading is invalid'
    });
  }

  Reading.findById(id).populate('user', 'displayName').exec(function (err, reading) {
    if (err) {
      return next(err);
    } else if (!reading) {
      return res.status(404).send({
        message: 'No reading with that identifier has been found'
      });
    }
    req.reading = reading;
    next();
  });
};
