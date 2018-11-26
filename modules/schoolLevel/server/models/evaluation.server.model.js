'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Evaluate Schema
 */
var EvaluationSchema = new Schema({
  departmentNo: {
    type: String,
    required: 'departmentNo cannot be blank'
  },
  target: {
    type: String,
    required: 'target cannot be blank'
  },
  rator: {
    type: String,
    required: 'rator cannot be blank'
  },
  classNo: {
    type: String,
    required: 'classNo cannot be blank'
  },
  DA_0000000024: {
    type: String,
    default: ''
  },
  DA_0000000025: {
    type: String,
    default: ''
  },
  DA_0000000026: {
    type: String,
    default: ''
  },
  DA_0000000027: {
    type: String,
    default: ''
  },
  DA_0000000028: {
    type: String,
    default: ''
  },
  DA_0000000029: {
    type: String,
    default: ''
  },
  DA_0000000030: {
    type: String,
    default: ''
  },
  DA_0000000031: {
    type: String,
    default: ''
  },
  DA_0000000032: {
    type: String,
    default: ''
  },
  DA_0000000033: {
    type: String,
    default: ''
  },
  DA_0000000034: {
    type: String,
    default: ''
  },
  DA_0000000035: {
    type: String,
    default: ''
  },
  DA_0000000036: {
    type: String,
    default: ''
  },
  DA_0000000037: {
    type: String,
    default: ''
  },
  DA_0000000038: {
    type: String,
    default: ''
  },
  DA_0000000039: {
    type: String,
    default: ''
  },
  zf: {
    type: String,
    default: ''
  },
  zgpj: {
    type: String,
    default: ''
  },
  xwjy: {
    type: String,
    default: ''
  },
  note: {
    type: String,
    default: ''
  }
});

mongoose.model('Evaluation', EvaluationSchema);
