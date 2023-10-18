const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      // user: async (parent, args, context) => {

      //   if (context.user) {
      //     const userData = await User.findOne({_id: context.user._id})
      //     .select('-__v -password')
      //     return userData;
      //   }
      //   throw AuthenticationError;
      // },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id })
            .select('-__v -password');
        }
        throw AuthenticationError;
      },

      // wishList: async (parent, {_id }, context) => {
      //   if (context.user) {
      //     const user = await User.findById(context.user._id).populate(
      //       'wishLists'
      //   );

      //   return user.wishLists.id(_id);
      //   }

      //   throw AuthenticationError;
      // },

      // parks: async () => {
      //   return await Park.find();
      // },
    },
    Mutation: {
    // Adds user upon signup
    addUser: async (parent, { userName, email, password }) => {
        const user = await User.create({ userName, email, password });
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

      // addWishList: async (parent, { parks }, context) => {
      //   if (context.user) {
      //     // const wishList = new WishList({ parks });
      //     const wishList = await WishList.create({ parks });

      //     await User.findByIdAndUpdate(context.user._id, {
      //       $push: { wishLists: wishList },
      //     });

      //     return wishList;
      //   }

      //   throw AuthenticationError;
      // },

      addFavoritePark: async (parent, { name, address }, context) => {
        if (context.user) {
          try {
            const savePark = await User.findOneAndUpdate(
              {_id: context.user._id}, 
              // {$push: { myParks: input }},
              {
                $addToSet: { parks: { name, address } },
              },
              { new: true}
            )

            return savePark;
          } catch (error) {
            // throw new Error('Failed to add the park to favorites.');
            console.log(error);
          }
            // const user = await User.findById(context.user._id);

            // Check if the parkId is already in the user's myParks array
            // if (!user.myParks.includes(input)) {
            //   // Add the parkId to the user's myParks array
            //   user.myParks.push(parkId);
            //   await user.save();
            //   return user;
          } 
          throw new AuthenticationError;}
    }
}

module.exports = resolvers;