'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  ListeningBlank = mongoose.model('ListeningBlank'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a listeningBlank
 */
exports.create = function (req, res) {
  var listeningBlank = new ListeningBlank(req.body);
  listeningBlank.user = req.user;

  listeningBlank.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(listeningBlank);
    }
  });
};

/**
 * Show the current listeningBlank
 */
exports.read = function (req, res) {
  res.json(req.listeningBlank);
};

/**
 * Update a listeningBlank
 */
exports.update = function (req, res) {
  var listeningBlank = req.listeningBlank;

  listeningBlank.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(listeningBlank);
    }
  });
};

/**
 * Delete a listeningBlank
 */
exports.delete = function (req, res) {
  var listeningBlank = req.listeningBlank;

  listeningBlank.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(listeningBlank);
    }
  });
};

/**
 * List of Listenings
 */
exports.list = function (req, res) {
  ListeningBlank.find().sort('-created').populate('user', 'displayName').exec(function (err, listeningBlanks) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(listeningBlanks);
    }
  });
};

/**
 * Listenings middleware
 */
exports.listeningBlankByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Listening is invalid'
    });
  }

  ListeningBlank.findById(id).populate('user', 'displayName').exec(function (err, listeningBlank) {
    if (err) {
      return next(err);
    } else if (!listeningBlank) {
      return res.status(404).send({
        message: 'No reading with that identifier has been found'
      });
    }
    req.listeningBlank = listeningBlank;
    next();
  });
};
