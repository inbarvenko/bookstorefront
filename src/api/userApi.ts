import axios from 'axios';
import {SignInData, SignUpData} from '../types';
import { axiosInstance } from './axios';

export const loginUser = (data: SignInData) => {
  // Request API.
  let res = false;

  console.log(data.email, data.password);

  const jsonValue = JSON.stringify({
    "identifier": data.email,
    "password": data.password
});
  console.log(jsonValue);

  axiosInstance
    .post('/api/auth/local', jsonValue, {
      "headers": {
        'Content-Type': 'application/json',
      }
  })
    .then(response => {
      // Handle success.
      res = true;
      console.log('Well done!');
      console.log('User profile', response.data.user);

      console.log('User token', response.data.jwt);
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error, error.message);
    });

  return res;
};

export const authUserGetData = () => {
  const token = 'YOUR_TOKEN_HERE';

  // Request API.
  return axiosInstance
    .get('/posts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      // Handle success.
      console.log('Data: ', response.data);
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
    });
};

export const registrateUser = (data: SignInData) => {
  let res = false;

  console.log(data.email, data.password);

  const jsonValue = JSON.stringify({
    identifier: data.email,
    password: data.password,
    role: 1,
  });
  console.log(jsonValue);

  axiosInstance
    .post('/api/auth/local/register', jsonValue)
    .then(response => {
      // Handle success.
      res = true;
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
    });
  return res;
};
