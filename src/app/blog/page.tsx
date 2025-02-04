import { getBlogPosts } from '@/lib/contentful';
import DestaquePost from '@components/blog/destaquePost';
import RecentePost from '@components/blog/recentePost';
import Link from 'next/link';
import FilteredPostsGrid from '@components/blog/blogFilter';

export default async function Blog() {
  const contentfulPosts = await getBlogPosts();

  const posts = contentfulPosts.map(post => ({
    title: post.title || 'Sem título',
    slug: post.slug || 'sem-slug',
    date: new Date(post.publishedDate).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }) || 'Data não disponível',
    summary: post.content?.substring(0, 150) + '...' || 'Resumo não disponível',
    category: post.category || 'Geral',
    imageSrc: post.image ? `https:${post.image}` : '/fallback-image.jpg',
    imageAlt: post.title || 'Imagem do post',
    destaque: post.destaque || false
  }));

  const postsDestaque = posts.filter(post => post.destaque).slice(0, 2);
  const postsRecentes = posts.filter(post => !post.destaque).slice(0, 3);

  return (
    <div>
      <section className="bannerHome max-md:pb-16 py-32">
        <div className="innerWidth max-lg:flex-col max-md:gap-8 max-w-8xl flex items-center justify-between items-stretch gap-16 px-4 mx-auto">
          <div className="postsEmDestaque w-full flex flex-col gap-6">
            <h2 className="text-primary max-md:text-5xl font-caveat text-6xl font-bold">Destaques</h2>
            <div className="w-full h-full flex flex-col gap-6">
              {postsDestaque.map((post, index) => (
                <Link 
                  key={index} 
                  href={`/post/${post.slug}`} 
                  className="flex w-full h-full hover:opacity-90 transition-opacity"
                >
                  <DestaquePost 
                    title={post.title} 
                    date={post.date}
                    slug={post.slug} 
                    summary={post.summary}
                    imageSrc={post.imageSrc} 
                    imageAlt={post.imageAlt} 
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="postsRecentes lg:max-w-[494px] w-full flex flex-col gap-6">
            <h2 className="text-tertiary max-md:text-5xl font-caveat text-6xl font-bold">Recentes</h2>
            <div className="w-full h-full flex flex-col gap-6">
              {postsRecentes.map((post, index) => (
                <Link 
                  key={index} 
                  href={`/post/${post.slug}`} 
                  className="block hover:opacity-90 transition-opacity"
                >
                  <RecentePost 
                    title={post.title} 
                    date={post.date} 
                    slug={post.slug} 
                    summary={post.summary}
                    imageSrc={post.imageSrc} 
                    imageAlt={post.imageAlt} 
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FilteredPostsGrid posts={posts} />
    </div>
  );
}