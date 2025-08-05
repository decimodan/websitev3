import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    // Usar import.meta.glob para cargar todos los posts dinámicamente
    const postModules = await import.meta.glob('../../content/blog/**/*.md', { eager: true });
    
    console.log('Found post modules:', Object.keys(postModules).length);
    
    const posts = Object.entries(postModules).map(([filePath, postModule]) => {
      try {
        const post = postModule as any;
        if (!post?.frontmatter) {
          console.warn('Post without frontmatter:', filePath);
          return null;
        }
        
        // Extraer el slug de la ruta del archivo
        const pathParts = filePath.split('/');
        let year, filename, slug;
        
        // Verificar si el archivo está en un subdirectorio por año o en el directorio raíz
        if (pathParts.length >= 4 && /^\d{4}$/.test(pathParts[pathParts.length - 2])) {
          // Archivo en subdirectorio por año (ej: src/content/blog/2019/post.md)
          year = pathParts[pathParts.length - 2];
          filename = pathParts[pathParts.length - 1].split('.')[0];
          slug = `${year}-${filename}`;
        } else {
          // Archivo en el directorio raíz (ej: src/content/blog/post.md)
          // Intentar extraer el año del frontmatter o usar un año por defecto
          const pubDate = post.frontmatter?.pubDate ? new Date(post.frontmatter.pubDate) : new Date();
          year = pubDate.getFullYear().toString();
          filename = pathParts[pathParts.length - 1].split('.')[0];
          slug = `${year}-${filename}`;
        }
        
        return {
          slug,
          title: post.frontmatter.title || 'Sin título',
          description: post.frontmatter.description || post.frontmatter.summary || 'Sin descripción',
          content: post.compiledContent() || '',
          pubDate: post.frontmatter.pubDate ? new Date(post.frontmatter.pubDate) : new Date()
        };
      } catch (error) {
        console.error(`Error processing post: ${filePath}`, error);
        return null;
      }
    });
    
    // Filtrar posts nulos
    const validPosts = posts.filter(post => post !== null);
    
    console.log('Valid posts for search:', validPosts.length);
    
    return new Response(JSON.stringify(validPosts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch posts', details: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 