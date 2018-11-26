'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  ReadingDerive = mongoose.model('ReadingDerive'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a reading
 */
exports.create = function (req, res) {
  var readingDerive = new ReadingDerive(req.body);
  readingDerive.user = req.user;

  readingDerive.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(readingDerive);
    }
  });
};

/**
 * Show the current readingDerive
 */
exports.read = function (req, res) {
  res.json(req.readingDerive);
};

/**
 * Update a reading
 */
exports.update = function (req, res) {
  var readingDerive = req.readingDerive;

  readingDerive.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(readingDerive);
    }
  });
};

/**
 * Delete a reading
 */
exports.delete = function (req, res) {
  var readingDerive = req.readingDerive;

  readingDerive.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(readingDerive);
    }
  });
};

/**
 * List of Readings
 */
exports.list = function (req, res) {
  ReadingDerive.find().sort('-created').populate('user', 'displayName').exec(function (err, readingDerives) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(readingDerives);
    }
  });
};

/**
 * Readings middleware
 */
exports.readingDeriveByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Reading is invalid'
    });
  }

  ReadingDerive.findById(id).populate('user', 'displayName').exec(function (err, readingDerive) {
    if (err) {
      return next(err);
    } else if (!readingDerive) {
      return res.status(404).send({
        message: 'No reading with that identifier has been found'
      });
    }
    req.readingDerive = readingDerive;
    next();
  });
};
