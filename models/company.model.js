
"use strict";

const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {timestamps: true});

module.exports = mongoose.model('Company', companySchema);