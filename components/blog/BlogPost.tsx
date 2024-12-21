'use client';

import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from '@/lib/navigation';
import type { BlogPost as BlogPostType } from '@/lib/types/blog';

export function BlogPost({ post }: { post: BlogPostType }) {
  return (
    <article className="container mx-auto py-12 px-4 max-w-4xl">
      <Link 
        href="/blog"
        className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap gap-4 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString()}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </header>

      <div 
        className="prose prose-neutral dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </article>
  );
}