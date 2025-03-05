# Terrenaitor (FrameBuilder)

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

Terrenaitor es una aplicación que permite generar Farcaster Frames (v2) automáticamente a partir de sitios web y aplicaciones existentes. Convierte fácilmente cualquier contenido web en un Frame interactivo para la plataforma Farcaster.

## 🚀 Características

- **Análisis de URLs**: Extrae automáticamente información relevante de cualquier sitio web
- **Generación de imágenes**: Crea imágenes con proporción 1.91:1 perfectas para Frames
- **Botones inteligentes**: Sugerencias automáticas de botones basados en el contenido
- **Personalización avanzada**: Editor visual para ajustar todos los aspectos del Frame
- **Despliegue con un clic**: Publicación instantánea en Vercel, Netlify o descarga de código
- **Frames interactivos**: Soporte para acciones post y manejo de interacciones 
- **Integraciones on-chain**: Conectar con contratos para experiencias web3 (pronto)

## 📦 Tecnologías

- Backend: Node.js + Express
- Frontend: React/Next.js
- Captura de web: Puppeteer
- Procesamiento de imágenes: Sharp
- Despliegue: Vercel API

## 🏗️ Arquitectura

El sistema consta de tres componentes principales:

1. **Analizador web**: Extrae metadatos, captura pantallas y analiza contenido
2. **Generador de Frames**: Crea los meta tags necesarios y el código para despliegue
3. **Plataforma de gestión**: Interfaz para crear, editar y gestionar Frames

![Arquitectura](docs/diagrams/architecture.svg)

## 📝 Roadmap

| Fase | Descripción | Tiempo Estimado |
|------|-------------|-----------------|
| MVP  | Funcionalidades básicas | 2-3 semanas |
| Beta | Editor avanzado y plantillas | 3-4 semanas |
| v1.0 | Características enterprise | 4-5 semanas |

Para más detalles, consulta [el roadmap completo](docs/roadmap.md).

## 🚧 Estado del proyecto

El proyecto se encuentra actualmente en fase de desarrollo inicial. 

- ✅ Concepto y diseño de arquitectura
- ✅ Componentes base del generador
- ✅ API básica 
- 🔄 Desarrollo frontend 
- 🔄 Integraciones de despliegue
- ⬜ Tests y optimización
- ⬜ Lanzamiento beta

## 🛠️ Instalación y uso

### Requisitos previos

- Node.js v18+
- MongoDB
- Cuenta en Cloudinary (para imágenes)
- Cuenta en Vercel/Netlify (para despliegue)

### Configuración

```bash
# Clonar el repositorio
git clone https://github.com/GsusFC/Terrenaitor.git
cd terrenaitor

# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend
cd ../frontend
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales
```

### Desarrollo

```bash
# Iniciar backend en modo desarrollo
cd backend
npm run dev

# Iniciar frontend en modo desarrollo
cd ../frontend
npm run dev
```

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - vea el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir los cambios importantes antes de crear un pull request.

---

Construido con ❤️ por [GsusFC](https://github.com/GsusFC)