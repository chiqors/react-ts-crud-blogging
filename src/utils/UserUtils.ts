import axios from 'axios';
import { AuthLogin, AuthRegister } from '../types/User';

export const authRegister = async (data: AuthRegister) => {
  const response = axios.post('http://localhost:3001/register', {
    "name": data.name,
    "email": data.email,
    "password": data.password,
    "status": data.status
  });
  return response;
};

export const authLogin = async (data: AuthLogin) => {
  const response = axios.post('http://localhost:3001/login', {
    "email": data.email,
    "password": data.password
  });
  return response;
};

