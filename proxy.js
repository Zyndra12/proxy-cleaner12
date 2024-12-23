const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configuración del proxy
app.use('/', createProxyMiddleware({
    target: 'URL_ORIGINAL',
    changeOrigin: true,
    onProxyRes(proxyRes) {
        // Filtrar anuncios, cookies o scripts según sea necesario.
        delete proxyRes.headers['ad-header']; // Ejemplo: eliminar un header específico
    }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy activo en el puerto ${PORT}`);
});
