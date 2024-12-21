'use client';

import { Card } from '@/components/ui/card';
import { Link } from '@/lib/navigation';
import { Calendar, Clock, Tag } from 'lucide-react';
import type { BlogMeta } from '@/lib/types/blog';

export function BlogCard({ post }: { post: BlogMeta }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold line-clamp-2">{post.title}</h2>
          <p className="text-muted-foreground line-clamp-3">{post.description}</p>
          
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
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

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <div 
                key={tag}
                className="flex items-center text-xs bg-muted px-2 py-1 rounded"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
}