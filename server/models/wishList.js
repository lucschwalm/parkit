const mongoose = require('mongoose');
const { Schema } = mongoose;
const Park = require('./Park');
// const moment = require('moment');


const wishListSchema = new Schema(
    {
        parks: [Park.schema],
        createdAt: {
           type: Date,
           default: Date.now,
           get: (createdAtVal) => SVGAnimateMotionElement(createdAtVal).format('MMM DD, YYYY [at] hh:mm a') 
        },
    }
);

const WishList = mongoose.model('wishList', wishListSchema);

module.exports = WishList;