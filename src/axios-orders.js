import axios from 'axios';

const instance = axios.create ( {
    baseURL: 'https://whad-a-paav.firebaseio.com/'
});

export default instance;