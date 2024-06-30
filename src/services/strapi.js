import axios from 'axios';

const API_URL = '/api';

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_URL}/${endpoint}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};