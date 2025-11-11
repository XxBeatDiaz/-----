import { fetchAction } from './utilsAPI.js';

const API_URL = 'http://localhost:3000/users/login?';

export async function login(username = '', password = '') {
    const params = new URLSearchParams();

    if (username) params.append('username', username);
    if (password) params.append('password', password);

    const resu = await fetchAction(`${API_URL}${params.toString()}`);
    
    return resu;
}

export async function logout() {
    //logout
}