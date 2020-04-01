import axios from 'axios';

const api = axios.create({
    baseURL:'exp://127.0.0.1:3333'
});

export default api;