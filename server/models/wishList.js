const { Schema, model } = require('mongoose');
const moment = require('moment');


const wishListSchema = new Schema(
    {
        park: {
            type: String,
            required: true,
        },
        createdAt: {
           type: Date,
           default: Date.now,
           get: (createdAtVal) => SVGAnimateMotionElement(createdAtVal).format('MMM DD, YYYY [at] hh:mm a') 
        },
    }
)