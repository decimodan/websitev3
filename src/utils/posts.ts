import type { CollectionEntry } from 'astro:content';

export interface SearchPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  pubDate: Date;
}

export async function getAllPosts(): Promise<SearchPost[]> {
  try {
    // Get all blog posts using Astro.glob
    const postFiles = await Astro.glob('../../content/blog/**/*.md');
    
    const posts = await Promise.all(
      postFiles.map(async (post) => {
        try {
          if (!post?.frontmatter) {
            return null;
          }
          
          // Extract slug from file path
          const pathParts = post.file.split('/');
          let year, filename, slug;
          
          // Check if file is in year subdirectory or root directory
          if (pathParts.length >= 4 && /^\d{4}$/.test(pathParts[pathParts.length - 2])) {
            // File in year subdirectory (e.g., src/content/blog/2019/post.md)
            year = pathParts[pathParts.length - 2];
            filename = pathParts[pathParts.length - 1].split('.')[0];
            slug = `${year}/${filename}`;
          } else {
            // File in root directory (e.g., src/content/blog/post.md)
            // Try to extract year from frontmatter or use default year
            const pubDate = post.frontmatter?.pubDate ? new Date(post.frontmatter.pubDate) : new Date();
            year = pubDate.getFullYear().toString();
            filename = pathParts[pathParts.length - 1].split('.')[0];
            slug = `${year}/${filename}`;
          }
          
          return {
            slug,
            title: post.frontmatter.title || 'Sin título',
            description: post.frontmatter.description || post.frontmatter.summary || 'Sin descripción',
            content: post.compiledContent() || '',
            pubDate: post.frontmatter.pubDate ? new Date(post.frontmatter.pubDate) : new Date()
          };
        } catch (error) {
          console.error(`Error processing post: ${post.file}`, error);
          return null;
        }
      })
    );
    
    // Filter out null posts
    return posts.filter(post => post !== null);
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
} 