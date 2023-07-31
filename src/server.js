const express = require('express');
const compression = require('compression');
const brotli = require('brotli');

const app = express();

// Habilitar compresión Gzip y Deflate
app.use(compression());

// Habilitar compresión Brotli (asegúrate de que hayas configurado Brotli en tu servidor)
app.use(brotli());

// Resto de la configuración y rutas de tu servidor...
// Aquí es donde configurarías tus rutas y lógica del servidor.

// Iniciar el servidor
const port = 5000; // El puerto que deseas utilizar
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
