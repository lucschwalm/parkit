const mongoose = require('mongoose');
const { Schema } = mongoose;
// const parkSchema = require('./Park');
// const moment = require('moment');


const wishListSchema = new Schema(
    {
        // parks: [parkSchema],
        createdAt: {
           type: Date,
           default: Date.now,
           get: (createdAtVal) => SVGAnimateMotionElement(createdAtVal).format('MMM DD, YYYY [at] hh:mm a') 
        },
    }
);

const WishList = mongoose.model('wishList', wishListSchema);

module.exports = WishList;