# Daniel Guerrero - Blog Personal

Este es mi blog personal migrado de Hugo a Astro, donde comparto mis experiencias en el mundo del desarrollo de software, tutoriales y opiniones sobre tecnología.

## Características

- 🎨 **Diseño Moderno**: Diseño limpio y responsivo con Tailwind CSS
- 🌙 **Modo Oscuro**: Alternancia entre temas claro y oscuro
- 🔍 **Búsqueda**: Búsqueda de texto completo usando Fuse.js
- 📱 **Responsivo**: Diseño mobile-first
- ⚡ **Rápido**: Generación de sitios estáticos con Astro
- 📝 **Blog**: Soporte para Markdown con frontmatter
- 🎯 **SEO**: Meta tags optimizados y datos estructurados
- 📊 **Soporte Matemático**: Integración con KaTeX para expresiones matemáticas
- 🌍 **Español**: Contenido completamente en español

## Stack Tecnológico

- **Framework**: [Astro](https://astro.build/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Búsqueda**: [Fuse.js](https://fusejs.io/)
- **Matemáticas**: [KaTeX](https://katex.org/)
- **Despliegue**: Cloudflare Pages

## Contenido

### Blog Posts
- **2019**: 10 posts sobre VueJS, PWAs, JavaScript y desarrollo web
- **2020**: 12 posts sobre desarrollo frontend, APIs y herramientas
- **2021**: 6 posts sobre consejos para desarrolladores y tecnología
- **2022**: 2 posts sobre desarrollo de software
- **2023**: 1 post sobre expectativas de ingenieros de software

### Skills
Documentación de habilidades técnicas:
- JavaScript y frameworks
- VueJS
- CSS/HTML5
- Java
- Docker
- Kubernetes
- MongoDB

### Proyectos
Portfolio de proyectos desarrollados:
- APIs
- CryptoInmortals
- Decimodan (este sitio)

## Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd websitev3
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador y visita `http://localhost:4321`

## Estructura del Proyecto

```
websitev3/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.astro     # Navegación principal
│   │   ├── Footer.astro     # Pie de página
│   │   ├── BlogCard.astro   # Tarjetas de posts del blog
│   │   ├── Intro.astro      # Introducción de la página principal
│   │   ├── Social.astro     # Enlaces de redes sociales
│   │   ├── SearchUI.astro   # Interfaz de búsqueda
│   │   └── Pagination.astro # Paginación del blog
│   ├── layouts/
│   │   └── BaseLayout.astro # Plantilla principal
│   ├── pages/               # Páginas de Astro
│   │   ├── index.astro      # Página principal
│   │   ├── about.astro      # Página Acerca de
│   │   ├── blog/            # Páginas del blog
│   │   └── api/             # Endpoints de API
│   ├── content/
│   │   ├── blog/            # Posts del blog (Markdown)
│   │   ├── skills/          # Habilidades técnicas
│   │   ├── projects/        # Proyectos
│   │   └── about.md         # Contenido Acerca de
│   └── styles/
│       └── global.css       # Estilos globales
├── public/                  # Assets estáticos
├── astro.config.mjs         # Configuración de Astro
├── tailwind.config.mjs      # Configuración de Tailwind
└── package.json
```

## Configuración

### Configuración del Sitio

Actualiza la configuración del sitio en `src/layouts/BaseLayout.astro`:

```astro
const siteTitle = "Daniel Guerrero";
```

### Enlaces Sociales

Edita los enlaces de redes sociales en `src/components/Social.astro`:

```astro
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/decimodan', icon: 'github' },
  { name: 'Twitter', url: 'https://twitter.com/decimodan', icon: 'twitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/decimodan', icon: 'linkedin' }
];
```

### Posts del Blog

Crea nuevos posts del blog en `src/content/blog/` con el siguiente frontmatter:

```markdown
---
title: "Título del Post"
description: "Descripción del post"
pubDate: 2024-01-15
thumbnail: "/path/to/image.jpg"
tags: ["tag1", "tag2"]
categories: ["Categoría"]
---
```

## Despliegue

### Cloudflare Pages

1. Sube tu código a GitHub
2. Conecta tu repositorio a Cloudflare Pages
3. Configura el comando de build: `npm run build`
4. Configura el directorio de salida: `dist`
5. ¡Despliega!

### Otras Plataformas

Este sitio Astro se puede desplegar en cualquier plataforma de hosting estático:

- **Netlify**: Conecta tu repositorio y despliega
- **Vercel**: Importa tu repositorio
- **GitHub Pages**: Usa la rama `gh-pages`
- **AWS S3**: Sube la carpeta `dist`

## Personalización

### Colores

Actualiza el esquema de colores en `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#tu-color',
      // Agrega más colores personalizados...
    }
  }
}
```

### Tipografía

Personaliza la tipografía en `src/styles/global.css`:

```css
@layer base {
  body {
    @apply font-sans;
  }
}
```

## Migración de Hugo

Este tema fue migrado desde Hugo. Cambios principales incluyen:

- **Motor de Plantillas**: Plantillas de Hugo → Componentes de Astro
- **Estilos**: CSS personalizado → Tailwind CSS
- **Contenido**: Estructura de contenido de Hugo → Colecciones de contenido de Astro
- **Sistema de Build**: Build de Hugo → Build de Astro
- **Despliegue**: Despliegue de Hugo → Despliegue de sitio estático

### Proceso de Migración

1. **Conversión de Frontmatter**: TOML (`+++`) → YAML (`---`)
2. **Estructura de Archivos**: Organización por años → Estructura plana
3. **Componentes**: Templates de Hugo → Componentes de Astro
4. **Estilos**: CSS personalizado → Tailwind CSS
5. **Funcionalidad**: Funciones de Hugo → JavaScript moderno

## Contribuir

1. Haz fork del repositorio
2. Crea una rama de características
3. Haz tus cambios
4. Prueba exhaustivamente
5. Envía un pull request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## Agradecimientos

- Diseño original del tema Hugo
- Equipo de Astro por el increíble framework
- Tailwind CSS por el framework CSS utility-first
- Fuse.js por la funcionalidad de búsqueda
