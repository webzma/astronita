# Astro Starter Kit: Basics

Este proyecto es una plantilla básica de Astro, un framework moderno para construir sitios web rápidos y optimizados.

## 🚀 Estructura del Proyecto

Dentro de tu proyecto Astro, verás los siguientes archivos y carpetas:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

- **`public/`**: Esta carpeta contiene activos estáticos como imágenes y fuentes. Los archivos aquí se sirven directamente en la raíz del sitio.
- **`src/components/`**: Aquí es donde colocamos los componentes de Astro, React, Vue, Svelte o Preact.
- **`src/layouts/`**: Esta carpeta contiene los diseños de página reutilizables.
- **`src/pages/`**: Astro busca archivos `.astro` o `.md` en esta carpeta para exponerlos como rutas basadas en el nombre del archivo.
- **`package.json`**: Este archivo contiene las dependencias y scripts del proyecto.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                                      |
| :------------------------ | :---------------------------------------------------------- |
| `npm install`             | Instala las dependencias                                    |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321`        |
| `npm run build`           | Construye el sitio de producción en `./dist/`               |
| `npm run preview`         | Previsualiza tu construcción localmente, antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check`        |
| `npm run astro -- --help` | Obtén ayuda usando el CLI de Astro                          |

## 📂 Descripción de Carpetas y Archivos

### `src/components/`

- **`Project.astro`**: Componente que muestra la información de un proyecto, incluyendo el título, descripción, imagen, enlaces a GitHub y demo, y tecnologías utilizadas.
- **`ProjectsSection.astro`**: Sección que agrupa y muestra todos los proyectos utilizando el componente `Project.astro`.

### `src/config/`

- **`data`**: Archivo de configuración que contiene los datos de los proyectos.

### `src/pages/`

- **`index.astro`**: Página principal del sitio.

## 👀 ¿Quieres aprender más?

Siéntete libre de consultar [nuestra documentación](https://docs.astro.build) o unirte a nuestro [servidor de Discord](https://astro.build/chat).

# webzma.dev
