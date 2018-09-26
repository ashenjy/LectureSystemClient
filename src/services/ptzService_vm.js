import axios from 'axios';

export function recalibrateCamera() {
    return axios.get('/api/recalibrateCamera')
        .then(res => res.data)
        .catch(error => error);
}