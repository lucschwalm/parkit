import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';

const Profile = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.me;

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Username: {user.userName}</h2>
      <h2>Favorite Parks:</h2>
      <ul>
        {user.parks.map((park, index) => (
          <li key={index}>
            <h3>Name: {park.name}</h3>
            <p>Description: {park.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;