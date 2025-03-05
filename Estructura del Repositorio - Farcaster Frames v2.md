# Estructura del Repositorio Terrenaitor

A continuación se detalla la estructura de archivos que deberías configurar en tu repositorio para el proyecto FrameBuilder:

```
terrenaitor/
│
├── README.md                   # Archivo principal de documentación
│
├── docs/                       # Documentación del proyecto
│   ├── diagrams/               # Diagramas y visuales
│   │   ├── architecture.svg    # Diagrama de arquitectura
│   │   ├── database-schema.svg # Esquema de base de datos
│   │   ├── deployment-flow.svg # Flujo de despliegue
│   │   └── ui-mockup.svg       # Mockup de la interfaz
│   │
│   └── roadmap.md              # Plan de desarrollo detallado
│
├── backend/                    # Servidor Express y lógica de backend
│   ├── package.json            # Dependencias del backend
│   ├── server.js               # Punto de entrada principal
│   ├── config/                 # Configuración de la aplicación
│   │   └── env.js              # Variables de entorno
│   │
│   ├── src/                    # Código fuente del servidor
│   │   ├── api/                # Endpoints de la API
│   │   │   ├── routes.js       # Definición de rutas
│   │   │   └── controllers/    # Controladores de rutas
│   │   │      └── frames.js    # Controlador para frames
│   │   │
│   │   ├── services/           # Servicios de la aplicación
│   │   │   ├── frameGenerator.js  # Generador de frames
│   │   │   ├── deployment.js   # Servicio de despliegue
│   │   │   └── storage.js      # Gestión de almacenamiento
│   │   │
│   │   └── utils/              # Utilidades
│   │      └── helpers.js       # Funciones auxiliares
│   │
│   └── tests/                  # Tests automatizados
│
└── frontend/                   # Aplicación Frontend (React/Next.js)
    ├── package.json            # Dependencias del frontend
    ├── public/                 # Archivos estáticos
    ├── src/                    # Código fuente de la aplicación
    │   ├── components/         # Componentes React
    │   │   ├── common/         # Componentes comunes
    │   │   ├── layout/         # Componentes de layout
    │   │   └── frames/         # Componentes específicos
    │   │
    │   ├── pages/              # Páginas de la aplicación
    │   ├── styles/             # Estilos CSS/SCSS
    │   ├── utils/              # Utilidades
    │   └── hooks/              # Hooks personalizados
    │
    └── tests/                  # Tests del frontend
```

Esta estructura proporciona una organización clara que separa el frontend del backend, manteniendo la documentación y los recursos organizados en carpetas específicas.