const typeDefs = `
    type User {
        _id: ID
        userName: String
        email: String
        password: String
        parks: [Park]
    }

    type Park {
        _id: ID
        name: String!
        address: String
    }

    input parkInput {
        _id: ID
        name: String!
        address: String
    }

    type WishList {
        _id: ID
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User,
    }

    type Mutation {
        addUser(userName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addFavorite(input: parkInput): User
        addFavoritePark(userId: ID!, name: String!, address: String): User
      }
`

module.exports = typeDefs;