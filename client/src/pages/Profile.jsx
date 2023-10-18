import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Modal, Tab, Nav, Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';
import Auth from '../utils/auth';
import SignUpForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

const Profile = () => {
  const { loading, error, data, refetch } = useQuery(GET_USER);
  const [showModal, setShowModal] = useState(false);

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
      {!Auth.loggedIn() ? (
        <div className="mt-4">
          <h3>
            You need to sign in to view your profile.
          </h3>
          <Button className="mt-3"
            variant="primary"
            onClick={() => setShowModal(true)}
          >
            Login/Sign Up
          </Button>
        </div>
      ) : (
        <Row>
          <Col>
            <Card className="mt-4" bg="success">
              <Card.Body className="mt-4 p-2">
                <h1 color="white">{user.userName}'s Favorite Parks</h1>
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
      )}
      {/* Login/Signup Modal */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </Container>
  );
};

export default Profile;


// import React, {useState, useEffect} from 'react';
// import { Card, Container, Row, Col } from 'react-bootstrap';

// import { useQuery } from '@apollo/client';
// import { GET_USER } from '../utils/queries';


// const Profile = () => {
//   const { loading, error, data, refetch } = useQuery(GET_USER);

//   const fetchUser = () => {
//     refetch();
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       fetchUser(); 
//     }, 10);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const user = data.me;

//   return (
//     <Container>
//       {AuthenticationError ? (
//               <p>
//                 You need to be logged in to access your profile.
//               </p>
//             ) : (
//       <Row>
//         <Col>
//           <Card className="mt-4" bg='success'>
//             <Card.Body className="mt-4 p-2">
//               <h1 color='white'>{user.userName}'s Favorite Parks</h1>
//             </Card.Body>
//           </Card>

//           {user.parks.map((park, index) => (
//             <Card key={index} className="mt-2 mb-4">
//               <Card.Body className="mt-4 p-2">
//                 <h3>{park.name}</h3>
//                 <p>{park.description}</p>
//               </Card.Body>
//             </Card>
//           ))}
//         </Col>
//       </Row>
//       )}
//     </Container>
//   );
// };

// export default Profile;