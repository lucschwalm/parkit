const mongoose = require('mongoose');

const { Schema } = mongoose;

const parkSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    latitude: {
      type: Int,
      required: true,
    },
    longitude: {
      type: Int,
      required: true,
    }
  });

const Park = mongoose.model('Park', parkSchema);

module.exports = Park;