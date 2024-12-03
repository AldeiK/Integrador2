const express = require('express');
const cors = require('cors'); // Importa el módulo CORS
const app = express();
const port = 3001;

// Configura CORS para permitir solicitudes de cualquier origen
app.use(cors()); // Esto permite solicitudes de cualquier origen (puedes restringirlo si lo deseas)

// Si deseas permitir solo solicitudes de un dominio específico (por ejemplo, el frontend en http://localhost:8080):
// app.use(cors({ origin: 'http://localhost:8080' }));

// Rutas y configuración del servidor
const funciones = require('./express/funciones'); // Asegúrate de que la ruta sea correcta

// Ruta de prueba para comprobar el CORS
app.get('/', (req, res) => {
  res.send('Servidor está funcionando');
});

// Ruta que devuelve los registros
app.get('/registros', funciones.obtenerRegistros);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
