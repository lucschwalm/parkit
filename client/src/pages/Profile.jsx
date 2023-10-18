import React, {useState, useEffect} from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';

const Profile = () => {
  const { loading, error, data, refetch } = useQuery(GET_USER);

  const fetchUser = () => {
    refetch();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchUser(); 
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.me;

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-4" bg='success'>
            <Card.Body className="mt-4 p-2">
              <h1 color='white'>{user.userName}'s Favorite Parks</h1>
            </Card.Body>
          </Card>

          {user.parks.map((park, index) => (
            <Card key={index} className="mt-2 mb-4">
              <Card.Body className="mt-4 p-2">
                <h3>{park.name}</h3>
                <p>{park.description}</p>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;