# Instrucciones para subir el código a GitHub

## Paso 1: Clonar el repositorio

Si aún no lo has hecho, clona tu repositorio:

```bash
git clone https://github.com/GsusFC/Terrenaitor.git
cd Terrenaitor
```

## Paso 2: Crear la estructura de directorios

Crea la estructura base de carpetas:

```bash
# Crear directorios principales
mkdir -p backend/src/api/controllers backend/src/services backend/src/utils backend/config backend/tests
mkdir -p frontend/src/components/{common,layout,frames} frontend/src/pages frontend/src/styles frontend/src/utils frontend/src/hooks frontend/tests
mkdir -p docs/diagrams
```

## Paso 3: Copiar los archivos base

### README.md (raíz del proyecto)
Copia el contenido del archivo "README.md" que preparé a la raíz del proyecto.

### Archivos de Backend
Copia estos archivos a sus respectivas ubicaciones:

1. `package.json` → `backend/package.json`
2. `.env.example` → `backend/.env.example`
3. `server.js` → `backend/server.js`
4. `frameGenerator.js` → `backend/src/services/frameGenerator.js`

### Archivos Adicionales
Archivos de código que hemos generado durante nuestra conversación:

5. `frame-generator-code.js` → `backend/src/services/frameGenerator.js`
6. `farcaster-frame-app.js` → `backend/src/api/controllers/frames.js`

### Diagramas y Documentación
Guarda los diagramas SVG en la carpeta docs/diagrams:

7. `frontend-mockup.svg` → `docs/diagrams/ui-mockup.svg`
8. `frame-generator-arch.svg` → `docs/diagrams/architecture.svg`
9. `database-schema.svg` → `docs/diagrams/database-schema.svg`
10. `deployment-flow.svg` → `docs/diagrams/deployment-flow.svg`
11. `product-roadmap.md` → `docs/roadmap.md`

## Paso 4: Crea un archivo de rutas API

Crea el archivo `backend/src/api/routes.js` con este contenido:

```javascript
const express = require('express');
const multer = require('multer');
const framesController = require('./controllers/frames');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Rutas para frames
router.post('/analyze-url', framesController.analyzeUrl);
router.post('/generate-frame', framesController.generateFrame);
router.post('/deploy/:projectId', framesController.deployProject);
router.get('/preview/:id', framesController.getPreview);

module.exports = router;
```

## Paso 5: Subir los cambios a GitHub

Después de colocar todos los archivos en sus respectivas ubicaciones:

```bash
# Agregar todos los cambios
git add .

# Hacer commit
git commit -m "Configuración inicial del proyecto Terrenaitor"

# Subir los cambios
git push origin main
```

## Paso 6: Configurar GitHub

Después de subir, configura tu repositorio en GitHub:

1. Activa GitHub Pages (si quieres una demo online)
2. Actualiza la descripción del proyecto
3. Configura los temas de tu repositorio

## Paso 7: Iniciar el desarrollo

Para comenzar a trabajar en el proyecto:

```bash
# Navegar al directorio backend
cd backend

# Instalar dependencias
npm install

# Iniciar el servidor en modo desarrollo
npm run dev
```

---

Con estos pasos tendrás configurada la estructura básica del proyecto y podrás comenzar el desarrollo.

Si tienes problemas para copiar o crear algún archivo, por favor avísame para ayudarte.