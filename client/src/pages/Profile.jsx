import { Card, Container, Row, Col } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';

const Profile = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.me;

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-4">
            <Card.Body className="mt-4 p-2">
              <h1>My Profile</h1>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;