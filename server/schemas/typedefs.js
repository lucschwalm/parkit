const { gql } = require("apollo-server-express")

const typeDefs = gql`
    type User {
        _id: ID
        userName: String
        email: String
        password: String
        wishLists: [WishList]
        parks: [Park]
    }

    type WishList {
        _id: ID
        parks: [Park]
        createdAt: String
    }

    type Park {
        _id: ID
        name: String!
        address: String
        description: String
        latitude: Float
        longtitude: Float
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: User,
        wishList(userId: ID!): WishList
        parks: [Park]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addWishList(parks: [ID]!): WishList
      }
`

module.exports = typeDefs;