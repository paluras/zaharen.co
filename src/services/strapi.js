import axios from 'axios';

const API_URL = '/api';

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${'https://my-project-n0jf.onrender.com/'}/${endpoint}`, {
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