import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export function getProducts() {
    return axios.get(`${baseUrl}/items`);
}