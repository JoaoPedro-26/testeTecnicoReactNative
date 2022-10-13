import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'content-type': 'application/json',
        'accept': 'aplication/json'
    }
});

export default api;