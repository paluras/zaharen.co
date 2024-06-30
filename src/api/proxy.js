// api/proxy.js
import { createProxyMiddleware } from 'http-proxy-middleware';

export default (req, res) => {
    const proxy = createProxyMiddleware({
        target: 'https://www.zaharen.co',
        changeOrigin: true,
        pathRewrite: {
            '^/api/proxy': '/api', // Rewriting the path to match the external API's structure
        },
    });
    proxy(req, res);
};
