const mongoose = require('mongoose');

const { Schema } = mongoose;

const parkSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    }
  });

const Park = mongoose.model('Park', parkSchema);

module.exports = Park;