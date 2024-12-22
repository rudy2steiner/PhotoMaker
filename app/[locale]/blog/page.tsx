import { Metadata } from 'next';
import { getBlogPosts } from '@/lib/utils/blog';
import { BlogList } from '@/components/blog/BlogList';
import { unstable_setRequestLocale } from 'next-intl/server';

// Force server-side rendering
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest updates, tutorials, and news about PhotoMaker AI',
};

interface Props {
  params: { locale: string };
  searchParams: { page?: string };
}

export default async function BlogPage({ 
  params: { locale },
  searchParams: { page = '1' }
}: Props) {
  unstable_setRequestLocale(locale);
  
  const currentPage = parseInt(page, 10);
  const { posts, totalPages } = await getBlogPosts(locale, currentPage);

  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <BlogList 
        posts={posts} 
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
}