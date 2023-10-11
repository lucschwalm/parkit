import { gql } from '@apollo/client';

const QUERY_PARKS = gql`
  query getParks {
    parks {
      _id
      name
    }
  }
`;

export { QUERY_PARKS };