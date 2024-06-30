// api/external-api.js
export default async function handler(req, res) {
    const { authorization } = req.headers; // Assuming authorization header is required
    const url = 'https://my-project-n0jf.onrender.com/api/linktrees';

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: authorization
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
}
