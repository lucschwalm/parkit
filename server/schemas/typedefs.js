const typeDefs = `
    type User {
        _id: ID
        userName: String
        email: String
        password: String
        wishLists: [wishList]
        parks: [Park]
    }

    type wishList {
        _id: ID
        parks: [Park]
        createdAt: String
    }

    type Park {
        _id: ID
        name: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: User,
        wishList(userId: ID!): wishList
        parks: [Park]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addWishList(parks: [ID]!): WishList
      }
`

module.exports = typeDefs;