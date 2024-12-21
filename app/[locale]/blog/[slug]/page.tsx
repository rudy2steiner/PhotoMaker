import { Metadata } from 'next';
import { getBlogPost, getBlogPosts } from '@/lib/utils/blog';
import { BlogPost } from '@/components/blog/BlogPost';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: { slug: string; locale: string };
}

// Force server-side rendering
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getBlogPost(params.slug, params.locale);
    return {
      title: `${post.title} | PhotoMaker Blog`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        authors: [post.author],
        publishedTime: post.date,
      },
    };
  } catch {
    return {
      title: 'Blog Post | PhotoMaker',
    };
  }
}

export async function generateStaticParams({ params: { locale } }: { params: { locale: string } }) {
  const { posts } = await getBlogPosts(locale);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  
  try {
    const post = await getBlogPost(params.slug, params.locale);
    return <BlogPost post={post} />;
  } catch {
    notFound();
  }
}