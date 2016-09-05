'use strict';

var mongoose = require('mongoose');

var pitchSchema = new mongoose.Schema({
    names: { type: String, required: true },
    section: { type: String, required: true },
    topic: {type: String, required: true },
    link: {type: String, required: true },
    likes: {type: Number, default: 0 },
  	dislikes: {type: Number, default: 0 },
    date: {type : Date, default : Date.now}
});

var Pitch = mongoose.model('Pitch', pitchSchema);

module.exports = Pitch;