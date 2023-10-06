const { User, wishList } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'users.wishLists',
            populate: 'wishList',
          });

          user.wishLists.sort((a, b) => b.createdAt - a.createdAt);

          return user;

        }

        throw AuthenticationError;
      },

      wishList: async (parent, {_id }, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'users.wishLists',
            populate: 'wishList',
        });

        return user.wishLists.id(_id);
        }

        throw AuthenticationError;
      },
    },
    Mutation: {
    // Adds user upon signup
    addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },

    // Logs existing user in
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw AuthenticationError;
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw AuthenticationError;
        }
  
        const token = signToken(user);
  
        return { token, user };
      },

      addWishList: async (parent, { parks }, context) => {
        if (context.user) {
          const wishList = new wishList({ parks });

          await User.findByIdAndUpdate(context.user._id, {
            $push: { wishLists: wishList },
          });

          return wishList;
        }

        throw AuthenticationError;
      },
    }
}

module.exports = resolvers;