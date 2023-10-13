import { gql } from '@apollo/client';

const QUERY_PARKS = gql`
  query parks {
    parks {
      _id
      name
    }
  }
`;

export { QUERY_PARKS };