import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';
import type { BlogPost, BlogMeta } from '@/lib/types/blog';
import { defaultLocale } from '@/app/i18n/config';

const postsDirectory = path.join(process.cwd(), 'content/blog');
const POSTS_PER_PAGE = 9;

/**
 * Gets blog posts for a specific locale with fallback to default locale
 */
export async function getBlogPosts(locale: string, page: number = 1): Promise<{
  posts: BlogMeta[];
  totalPages: number;
}> {
  // Try locale-specific directory first
  let localeDir = path.join(postsDirectory, locale);
  
  // If locale directory doesn't exist, fall back to default locale
  if (!fs.existsSync(localeDir)) {
    localeDir = path.join(postsDirectory, defaultLocale);
  }

  // If even default locale doesn't exist, return empty
  if (!fs.existsSync(localeDir)) {
    return { posts: [], totalPages: 0 };
  }

  const fileNames = fs.readdirSync(localeDir);
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(localeDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        ...data,
        readingTime: readingTime(content).text,
      } as BlogMeta;
    })
    .sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime());

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return {
    posts: paginatedPosts,
    totalPages
  };
}

/**
 * Gets a single blog post with fallback to default locale
 */
export async function getBlogPost(slug: string, locale: string): Promise<BlogPost> {
  // Try locale-specific post first
  let fullPath = path.join(postsDirectory, locale, `${slug}.md`);
  
  // If post doesn't exist in requested locale, fall back to default locale
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, defaultLocale, `${slug}.md`);
  }

  // If post doesn't exist in default locale either, throw error
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .process(content);
    
  return {
    slug,
    content: processedContent.toString(),
    readingTime: readingTime(content).text,
    ...data,
  } as BlogPost;
}