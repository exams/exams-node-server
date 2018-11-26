'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Cloze = mongoose.model('Cloze'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a cloze
 */
exports.create = function (req, res) {
  var cloze = new Cloze(req.body);
  cloze.user = req.user;

  cloze.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(cloze);
    }
  });
};

/**
 * Show the current cloze
 */
exports.read = function (req, res) {
  res.json(req.cloze);
};

/**
 * Update a cloze
 */
exports.update = function (req, res) {
  var cloze = req.cloze;

  cloze.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(cloze);
    }
  });
};

/**
 * Delete a cloze
 */
exports.delete = function (req, res) {
  var cloze = req.cloze;

  cloze.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(cloze);
    }
  });
};

/**
 * List of Clozes
 */
exports.list = function (req, res) {
  Cloze.find().sort('-created').populate('user', 'displayName').exec(function (err, clozes) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(clozes);
    }
  });
};

/**
 * clozes middleware
 */
exports.clozeByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Cloze is invalid'
    });
  }

  Cloze.findById(id).populate('user', 'displayName').exec(function (err, cloze) {
    if (err) {
      return next(err);
    } else if (!cloze) {
      return res.status(404).send({
        message: 'No cloze with that identifier has been found'
      });
    }
    req.cloze = cloze;
    next();
  });
};
