const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
// const WishList = require('./wishList');
// const parkSchema = require('./Park');

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  parks: [
    {
      name: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
      }
    },
  ],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

const User = mongoose.model('User', userSchema);

module.exports = User;
