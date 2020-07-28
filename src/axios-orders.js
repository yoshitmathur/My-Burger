import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ba232.firebaseio.com/'
});

export default instance;