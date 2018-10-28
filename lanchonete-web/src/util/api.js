import axios from 'axios';

const api = axios.create({baseURL:'http://localhost:4201/api'});

export default api;