// Punto de entrada principal para el backend de Terrenaitor
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const routes = require('./src/api/routes');

// Inicialización de la aplicación
const app = express();
const PORT = process.env.PORT || 3000;

// Asegurar que existan los directorios necesarios
const uploadsDir = path.join(__dirname, 'uploads');
const projectsDir = path.join(__dirname, 'projects');
const downloadsDir = path.join(__dirname, 'public', 'downloads');

[uploadsDir, projectsDir, downloadsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Manejo de headers para CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    return res.status(200).json({});
  }
  next();
});

// Routing API
app.use('/api', routes);

// Ruta base (para frontend en producción)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Terrenaitor API</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1 { color: #7855ff; }
        pre { background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; }
      </style>
    </head>
    <body>
      <h1>Terrenaitor API</h1>
      <p>La API de Terrenaitor está funcionando correctamente.</p>
      <h2>Endpoints disponibles:</h2>
      <pre>
POST /api/analyze-url     - Analizar URL y extraer metadatos
POST /api/generate-frame  - Generar Frame a partir de metadatos
POST /api/deploy/:id      - Desplegar Frame
GET  /preview/:id         - Ver preview de imagen
      </pre>
      <p>Para más información, consulta la <a href="https://github.com/GsusFC/Terrenaitor">documentación</a>.</p>
    </body>
    </html>
  `);
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});

module.exports = app; // Para testing
