import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ userName: '', email: '', password: '' });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const userResponse = await addUser({

        variables: {
          ...userFormData
        }
      });

      const token = userResponse.data.addUser.token

      Auth.login(token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      userName: '',
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/landing">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    placeholder="Your username"
                    name="userName"
                    type="text"
                    value={userFormData.userName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={userFormData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    className="form-control"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={userFormData.password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="btn btn-block btn-info mt-3" 
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
  
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
  
};

export default SignupForm;