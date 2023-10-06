const typeDefs = `
    type User {
        _id: ID
        userName: String
        email: String
        password: String
        wishLists: [wishList]
        parks: [Park]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
      }
`

module.exports = typeDefs;