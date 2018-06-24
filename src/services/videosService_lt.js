import axios from 'axios';

export function getAllVideos() {
    return axios.get('/api/videos')
        .then(res => res.data)
        .catch(error => error);
}