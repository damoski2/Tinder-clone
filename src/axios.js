import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://oyintinder-backend.herokuapp.com'
});

export default instance;