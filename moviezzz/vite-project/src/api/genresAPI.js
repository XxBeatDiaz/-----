import { fetchAction } from './utilsAPI.js';

const API_URL = 'http://localhost:3000/genres';

export async function getGenres() {
    return await fetchAction(`${API_URL}`);
}