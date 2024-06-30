import axios from 'axios';

const API_URL = '/api';

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_URL}/${endpoint}`, {
            headers: {
                Authorization: 'Bearer 7869f4e97e81135b4fd4e4a62f5194d8b6b447427ff72ea0e8a23420c7ea62481b062be38be143478d2a2ebc26acf6eca0d8ad70cecb843374c8496ed33147c163cfbc196a9c722296d25322ca176006df0a8c9a9229b15db8ae03e7ccd526e9f75f95f3dc2e49790d0547dbc9197cfaa9d89be7d65ab7fb7188759c6cd01eae'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};