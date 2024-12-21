import { Metadata } from 'next';
import { getBlogPosts } from '@/lib/utils/blog';
import { BlogList } from '@/components/blog/BlogList';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Blog | PhotoMaker',
  description: 'Latest updates, tutorials, and news about PhotoMaker AI',
};

interface Props {
  params: { 
    locale: string;
    page: string;
  };
}

export default async function BlogPaginatedPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  
  const currentPage = parseInt(params.page, 10);
  
  if (isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const { posts, totalPages } = await getBlogPosts(params.locale, currentPage);

  if (currentPage > totalPages) {
    notFound();
  }

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