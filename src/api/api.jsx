import axios from 'axios';

const url = 'http://localhost:5000'
const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req
})

export const signIn = (formData) => API.post('/api/users/login', formData)
export const signUp = (formData) => API.post('/api/users/register', formData)