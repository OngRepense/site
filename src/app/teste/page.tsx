import { getBlogPosts } from '@/lib/contentful';
import Link from 'next/link';

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.author} - {new Date(post.publishedDate).toLocaleDateString()}</p>
            {post.image && <img src={post.image} alt={post.title} />}
            <p>{post.content ? post.content.slice(0, 150) : 'Conteúdo não disponível'}...</p> {/* Verificação se o conteúdo existe */}
          </li>
        ))}
      </ul>
    </div>
  );
}
