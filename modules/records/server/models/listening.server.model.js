'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Listening Schema
 */
var ListeningSchema = new Schema({
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
  options: {
    type: Array,
    required: 'Options cannot be empty'
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

mongoose.model('Listening', ListeningSchema);
