import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: 3, username: 'José', password: 'jose@gmail.com' }
        };
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signin: async (username: string, password: string) => {
        return {
            user: { id: 3, username: 'José', email: 'jose@gmail.com' },
            token: '123456789'
        };
        const response = await api.post('/signin', { username, password });
        return response.data;
    },
    logout: async () => {
        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    }
})