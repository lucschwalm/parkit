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
  mutation addFavoritePark($userName: String!, $name: String!, $address: String) {
    addFavoritePark(userName: $userName, name: $name, address: $address) {
      _id
      userName
      parks {
        _id
        name
        address
      }
    }
  }
`;