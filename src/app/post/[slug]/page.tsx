import { getBlogPost, getBlogPosts } from '@/lib/contentful';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts?.map((post) => ({ slug: post.slug })) || [];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O post solicitado não foi encontrado',
    };
  }

  return {
    title: post.title,
    description: post.content?.substring(0, 160) || 'Descrição padrão',
    openGraph: {
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

// Page component
export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  const formattedDate = new Date(post.publishedDate).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="blogHome max-md:py-16 py-32">
      <div className="innerWidth max-w-8xl flex flex-col items-center justify-center gap-16 px-4 mx-auto">
        <Link href="/blog" className="text-primary hover:underline mb-8 inline-block">
          &larr; Voltar ao Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm">
            {post.author && <span className="font-medium">{post.author}</span>}
            <time dateTime={post.publishedDate}>{formattedDate}</time>
            {post.category && (
              <span className="bg-primary text-white px-2 py-1 rounded-sm text-xs">
                {post.category}
              </span>
            )}
          </div>
        </header>

        {post.image && (
          <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={1920}
              height={1080}
              loading="lazy"
            />
          </div>
        )}

        <div className="prose max-w-none">
          {post.content && (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          )}
        </div>
      </div>
    </article>
  );
}