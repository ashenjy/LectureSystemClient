import axios from 'axios';

export function recalibrateCamera() {
    return axios.get('/api/recalibrateCamera')
        .then(res => res.data)
        .catch(error => error);
}

export function turnLeftCamera() {
    return axios.get('/api/turnLeftCamera')
        .then(res => res.data)
        .catch(error => error);
}

export function turnRightCamera() {
    return axios.get('/api/turnRightCamera')
        .then(res => res.data)
        .catch(error => error);
}

export function turnUpCamera() {
    return axios.get('/api/turnUpCamera')
        .then(res => res.data)
        .catch(error => error);
}

export function turnDownCamera() {
    return axios.get('/api/turnDownCamera')
        .then(res => res.data)
        .catch(error => error);
}

export function stopMovementCamera() {
    return axios.get('/api/stopMovementCamera')
        .then(res => res.data)
        .catch(error => error);
}
