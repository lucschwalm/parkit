const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment');


const wishListSchema = new Schema(
    {
        parks: [Park],
        createdAt: {
           type: Date,
           default: Date.now,
           get: (createdAtVal) => SVGAnimateMotionElement(createdAtVal).format('MMM DD, YYYY [at] hh:mm a') 
        },
    }
);

const wishList = mongoose.model('wishList', wishListSchema);

module.exports = wishList;