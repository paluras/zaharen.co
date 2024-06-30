import axios from 'axios';

// Update API_URL to point directly to your Strapi API if not using a proxy
// or ensure your proxy is correctly configured to forward requests to Strapi.
const API_URL = '/api/proxy';

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_URL}/${endpoint}`, {
            // Include headers as required by your Strapi API for CORS
            headers: {
                'Content-Type': 'application/json',
                // Example: Include an Origin header if your API checks for specific origins
                // 'Origin': 'http://yourfrontenddomain.com',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};