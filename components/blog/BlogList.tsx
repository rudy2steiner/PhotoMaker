'use client';

import { BlogCard } from './BlogCard';
import { Pagination } from './Pagination';
import type { BlogMeta } from '@/lib/types/blog';

interface BlogListProps {
  posts: BlogMeta[];
  currentPage: number;
  totalPages: number;
}

export function BlogList({ posts, currentPage, totalPages }: BlogListProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}