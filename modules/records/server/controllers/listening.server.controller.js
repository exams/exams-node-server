'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Listening = mongoose.model('Listening'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a reading
 */
exports.create = function (req, res) {
  var listening = new Listening(req.body);
  listening.user = req.user;

  listening.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(listening);
    }
  });
};

/**
 * Show the current reading
 */
exports.read = function (req, res) {
  res.json(req.listening);
};

/**
 * Update a reading
 */
exports.update = function (req, res) {
  var listening = req.listening;

  listening.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(listening);
    }
  });
};

/**
 * Delete a reading
 */
exports.delete = function (req, res) {
  var listening = req.listening;

  listening.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(listening);
    }
  });
};

/**
 * List of Listenings
 */
exports.list = function (req, res) {
  Listening.find().sort('-created').populate('user', 'displayName').exec(function (err, listenings) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(listenings);
    }
  });
};

/**
 * Listenings middleware
 */
exports.listeningByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Listening is invalid'
    });
  }

  Listening.findById(id).populate('user', 'displayName').exec(function (err, listening) {
    if (err) {
      return next(err);
    } else if (!listening) {
      return res.status(404).send({
        message: 'No reading with that identifier has been found'
      });
    }
    req.listening = listening;
    next();
  });
};
