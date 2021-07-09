import axios from 'axios';

export const checkAuth = () => {
    return axios.get('/api/auth/checkAuth');
};

export const login = ({ email, password }) => {
    return axios.post('/api/auth/login', { email, password });
};

export const register = ({ email, username, password }) => {
    return axios.post('/api/auth/register', { email, username, password });
};
