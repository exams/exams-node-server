'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Listening_blank Schema
 */
var ListeningBlankSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  examType: {
    type: String,
    default: '',
    trim: true
  },
  year: {
    type: Number
  },
  month: {
    type: Number
  },
  article: {
    type: String,
    default: '',
    trim: true,
    required: 'Article cannot be blank'
  },
  analysis: {
    type: String,
    default: '',
    trim: true,
    required: 'Analysis cannot be blank'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('ListeningBlank', ListeningBlankSchema);
