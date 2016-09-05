'use strict';

var mongoose = require('mongoose');

var resourceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    section: { type: String, required: true },
    topic: {type: String, required: true },
    link: {type: String, required: true },
    overview: { type: String, required: true },
    likes: {type: Number, default: 0 },
  	dislikes: {type: Number, default: 0 },
    date: {type : Date, default : Date.now}
});

var Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;