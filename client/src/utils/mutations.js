import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_FAVORITE_PARK = gql`
  mutation addFavoritePark($name: String!, $description: String) {
    addFavoritePark(name: $name, description: $description) {
      parks {
        _id
        name
        description
      }
    }
  }
`;