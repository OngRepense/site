// src/app/blog/page.tsx
import { getBlogPosts } from '@/lib/contentful';
import CardPost from '@components/blog/cardPost';
import Link from 'next/link';

export default async function Blog() {
  const contentfulPosts = await getBlogPosts();

  // Mapeamento corrigido com fallbacks
  const posts = contentfulPosts.map(post => ({
    title: post.title || 'Sem título',
    slug: post.slug || 'sem-slug', // Fallback para slug
    date: new Date(post.publishedDate).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }) || 'Data não disponível',
    summary: post.content?.substring(0, 150) + '...' || 'Resumo não disponível',
    category: post.category || 'Geral', // Usando o campo correto
    imageSrc: post.image ? `https:${post.image}` : '/fallback-image.jpg',
    imageAlt: post.title || 'Imagem do post'
  }));

  // Função para obter categorias únicas
  const getCategories = (posts: any[]) => {
    return Array.from(new Set(posts.map((post) => post.category)));
  };

  const categories = getCategories(posts);

  return (
    <div>
      <section className="bannerHome max-md:pb-16 py-32">
        {/* Seção de Destaques e Recentes mantida sem alterações */}
      </section>

      <section className="blogHome max-md:py-16 bg-tertiary py-32">
        <div className="innerWidth max-w-8xl flex flex-col items-center justify-center gap-16 px-4 mx-auto">
          <h2 className="text-primary max-md:text-3xl max-md:text-center font-caveat text-6xl text-secondary font-bold">
            Nosso blog
          </h2>

          <div className="w-full flex flex-col gap-8">
            {/* Filtros (mantido para implementação futura) */}
            
            {/* Grid de Posts com Links */}
            <div className="gridPosts grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {posts.map((post, index) => (
                <Link 
                  key={index} 
                  href={`/post/${post.slug}`} 
                  className="block hover:opacity-90 transition-opacity"
                >
                  <CardPost
                    title={post.title}
                    date={post.date}
                    summary={post.summary}
                    category={post.category}
                    imageSrc={post.imageSrc}
                    imageAlt={post.imageAlt}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}