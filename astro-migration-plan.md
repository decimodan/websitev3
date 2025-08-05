# Plan de Migración: Blist Hugo Theme → Astro

## Estructura del Proyecto Astro

```
blist-astro/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── BlogCard.astro
│   │   ├── Intro.astro
│   │   ├── Social.astro
│   │   ├── SearchUI.astro
│   │   └── Pagination.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── about.astro
│   │   └── 404.astro
│   ├── content/
│   │   └── blog/
│   │       └── *.md
│   └── styles/
│       ├── global.css
│       └── components.css
├── public/
│   ├── fonts/
│   ├── images/
│   └── favicon.ico
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

## 2. Configuración Inicial

### package.json
```json
{
  "name": "blist-astro",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^4.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "@astrojs/markdown-remark": "^2.0.0",
    "fuse.js": "^7.0.0"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.0",
    "tailwindcss": "^3.0.0",
    "typescript": "^5.0.0"
  }
}
```

### astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['rehype-highlight']
  },
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
```

### tailwind.config.mjs
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: [
            {
              color: theme('colors.gray.400'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.200'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
```

## 3. Migración de Componentes

### BaseLayout.astro
```astro
---
export interface Props {
  title: string;
  description?: string;
  image?: string;
  math?: boolean;
}

const { title, description, image, math } = Astro.props;
const siteTitle = "Blist Theme";
const fullTitle = title ? `${title} - ${siteTitle}` : siteTitle;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico">
    
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    
    <!-- Open Graph -->
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={fullTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    
    <!-- KaTeX for math -->
    {math && (
      <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.js"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/contrib/auto-render.min.js"></script>
      </>
    )}
  </head>
  <body class="dark:bg-gray-800 dark:text-white relative">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
    
    <!-- Dark mode script -->
    <script>
      // Check for saved dark mode preference or default to light mode
      if (localStorage.getItem('darkMode') === 'true' || 
          (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    </script>
  </body>
</html>
```

### Header.astro
```astro
---
// Get site data from Astro.glob or config
const menuItems = [
  { name: 'About', url: '/about' },
  { name: 'Blog', url: '/blog' }
];
---

<header class="container flex justify-around md:justify-between gap-4 flex-wrap p-6 mx-auto">
  <a href="/" class="capitalize font-extrabold text-2xl">
    Blist Theme
  </a>
  <ul class="flex items-center gap-4 lg:gap-6">
    {menuItems.map(item => (
      <li><a href={item.url}>{item.name}</a></li>
    ))}
    
    <!-- Search Toggle -->
    <li class="grid place-items-center">
      <span class="open-search inline-block cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </span>
    </li>
    
    <!-- Dark Mode Toggle -->
    <li class="grid place-items-center">
      <span class="toggle-dark-mode inline-block cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="5" x2="12" y2="5.01" />
          <line x1="17" y1="7" x2="17" y2="7.01" />
          <line x1="19" y1="12" x2="19" y2="12.01" />
          <line x1="17" y1="17" x2="17" y2="17.01" />
          <line x1="12" y1="19" x2="12" y2="19.01" />
          <line x1="7" y1="17" x2="7" y2="17.01" />
          <line x1="5" y1="12" x2="5" y2="12.01" />
          <line x1="7" y1="7" x2="7" y2="7.01" />
        </svg>
      </span>
    </li>
  </ul>
</header>

<SearchUI />

<script>
  // Dark mode toggle functionality
  document.querySelector('.toggle-dark-mode').addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      html.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  });
</script>
```

### BlogCard.astro
```astro
---
export interface Props {
  post: {
    slug: string;
    data: {
      title: string;
      description: string;
      thumbnail?: string;
      pubDate: Date;
    };
  };
}

const { post } = Astro.props;
const { slug, data } = post;
---

<a class="p-2" href={`/blog/${slug}`}>
  {data.thumbnail && (
    <div class="relative">
      <img src={data.thumbnail} alt={data.title} class="rounded-lg shadow-sm w-full h-52 object-cover" />
      <div class="absolute top-4 right-4 rounded shadow bg-white text-gray-900 dark:bg-gray-900 dark:text-white text-sm px-2 py-0.5">
        {data.pubDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' })}
      </div>
    </div>
  )}
  <div class="my-2 text-xl font-semibold">{data.title}</div>
  <div class="">{data.description}</div>
</a>
```

### Intro.astro
```astro
---
const introData = {
  title: "Hey! I'm Katheryn Fox",
  description: "26 y/o junior developer who enjoys social card games, blogging and painting",
  photo: "/picture.jpg"
};
---

<section class="bg-blue-100 dark:bg-gray-900">
  <div class="container max-w-screen-lg mx-auto px-6 py-12 grid md:grid-cols-2 gap-4 lg:gap-16 items-center">
    <div>
      <h1 class="text-4xl font-bold mb-4">{introData.title}</h1>
      <p class="font-light text-lg">{introData.description}</p>
    </div>
    <img class="rounded-lg shadow-sm" src={introData.photo} alt="Profile" />
  </div>
</section>
```

## 4. Páginas Principales

### index.astro
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Intro from '../components/Intro.astro';
import BlogCard from '../components/BlogCard.astro';
import Social from '../components/Social.astro';

// Get blog posts
const posts = await Astro.glob('../content/blog/*.md');
const recentPosts = posts
  .sort((a, b) => new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime())
  .slice(0, 6);
---

<BaseLayout title="Home">
  <Intro />
  
  <div class="container p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
    {recentPosts.map(post => (
      <BlogCard post={post} />
    ))}
  </div>

  {posts.length > 6 && (
    <div class="text-center mb-8">
      <a class="px-8 py-3 rounded transition-colors bg-blue-100 text-gray-500 hover:text-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:text-white" href="/blog">
        Otros post
      </a>
    </div>
  )}

  <Social />
</BaseLayout>
```

### blog/index.astro
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import BlogCard from '../../components/BlogCard.astro';
import Pagination from '../../components/Pagination.astro';
import Social from '../../components/Social.astro';

// Get all blog posts
const posts = await Astro.glob('../../content/blog/*.md');
const sortedPosts = posts.sort((a, b) => 
  new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime()
);

// Pagination
const postsPerPage = 6;
const currentPage = 1; // You can make this dynamic
const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
const startIndex = (currentPage - 1) * postsPerPage;
const endIndex = startIndex + postsPerPage;
const currentPosts = sortedPosts.slice(startIndex, endIndex);
---

<BaseLayout title="Blog">
  <h1 class="container px-6 pt-6 mx-auto text-3xl font-bold">Blog</h1>

  <div class="container p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
    {currentPosts.map(post => (
      <BlogCard post={post} />
    ))}
  </div>

  <Pagination currentPage={currentPage} totalPages={totalPages} />
  <Social />
</BaseLayout>
```

### blog/[slug].astro
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Social from '../../components/Social.astro';

export async function getStaticPaths() {
  const posts = await Astro.glob('../../content/blog/*.md');
  return posts.map(post => ({
    params: { slug: post.file.split('/').pop().split('.').shift() },
    props: { post }
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---

<BaseLayout 
  title={post.frontmatter.title}
  description={post.frontmatter.description}
  image={post.frontmatter.thumbnail}
  math={post.frontmatter.math}
>
  {post.frontmatter.thumbnail && (
    <div class="relative max-w-5xl mx-auto px-4">
      <img src={post.frontmatter.thumbnail} class="rounded-lg shadow-sm w-full object-contain" />
      <div class="absolute top-4 right-8 rounded shadow bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-2 py-0.5">
        {post.frontmatter.pubDate.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </div>
    </div>
  )}

  <article class="prose lg:prose-lg mx-auto my-8 dark:prose-dark px-4">
    <h1 class="text-2xl font-bold mb-2">{post.frontmatter.title}</h1>
    <Content />
  </article>

  <Social />
</BaseLayout>
```

## 5. Funcionalidades Especiales

### Búsqueda con Fuse.js
```astro
<!-- SearchUI.astro -->
<div class="search-ui hidden fixed inset-0 z-50 bg-black bg-opacity-50">
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div class="flex items-center justify-between p-4 border-b">
        <input 
          type="text" 
          placeholder="Search posts..." 
          class="flex-1 bg-transparent border-none outline-none text-lg"
        />
        <button class="close-search ml-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="search-results hidden p-4">
        <ul class="search-list space-y-2"></ul>
      </div>
    </div>
  </div>
</div>

<script>
  import Fuse from 'fuse.js';
  
  let fuse;
  let searchVisible = false;
  let firstRun = true;
  
  // Search functionality implementation
  // (Similar to the original search.js but adapted for Astro)
</script>
```

## 6. Migración de Contenido

### Estructura de Markdown
```markdown
---
title: "Mi Post"
description: "Descripción del post"
pubDate: 2024-01-15
thumbnail: "/blog/image.jpg"
math: false
---

Contenido del post...
```

## 7. Ventajas de la Migración a Astro

1. **Mejor Performance**: Astro genera HTML estático por defecto
2. **Menos JavaScript**: Solo carga JS cuando es necesario
3. **Mejor DX**: TypeScript, hot reload, mejor tooling
4. **Flexibilidad**: Puedes usar React, Vue, Svelte si necesitas interactividad
5. **SEO Mejorado**: Mejor control sobre el HTML generado
6. **Mantenimiento**: Menos dependencias, código más limpio

## 8. Pasos de Implementación

1. **Crear proyecto Astro**: `npm create astro@latest blist-astro`
2. **Instalar dependencias**: Tailwind, Fuse.js, etc.
3. **Migrar componentes**: Convertir templates Hugo a componentes Astro
4. **Configurar rutas**: Adaptar la estructura de páginas
5. **Migrar contenido**: Convertir markdown y frontmatter
6. **Implementar funcionalidades**: Búsqueda, dark mode, etc.
7. **Optimizar**: Imágenes, fonts, performance
8. **Testing**: Verificar funcionalidad y responsive design

## 9. Consideraciones Especiales

- **URLs**: Mantener la misma estructura de URLs si es posible
- **SEO**: Migrar meta tags y structured data
- **Performance**: Optimizar imágenes y assets
- **Analytics**: Migrar Google Analytics si se usa
- **Deployment**: Adaptar para Vercel, Netlify, etc. 