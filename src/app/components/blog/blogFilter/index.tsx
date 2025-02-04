'use client';

import { useState } from 'react';
import CardPost from '@components/blog/cardPost';
import Link from 'next/link';

interface FilteredPostsGridProps {
  posts: Array<{
    title: string;
    slug: string;
    date: string;
    summary: string;
    category: string;
    imageSrc: string;
    imageAlt: string;
  }>;
}

const FilteredPostsGrid = ({ posts }: FilteredPostsGridProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Obter categorias únicas
  const categories = Array.from(new Set(posts.map(post => post.category)));

  // Filtrar posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="blogHome max-md:py-16 bg-tertiary py-32">
      <div className="innerWidth max-w-8xl flex flex-col items-center justify-center gap-16 px-4 mx-auto">
        <h2 className="text-primary max-md:text-3xl max-md:text-center font-caveat text-6xl text-secondary font-bold">
          Nosso Blog
        </h2>
        {/* Filtros */}
        <div className="flex max-md:gap-4 items-center gap-8 w-full">
          <input
            type="text"
            placeholder="Pesquisar por título..."
            className="max-lg:max-w-full max-w-[432px] w-full pl-4 pr-10 py-2 bg-secondary text-tertiary border border-secondary rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary placeholder:text-tertiary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <select
            className=" h-[42px] px-4 py-2 bg-secondary text-tertiary border border-secondary rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas as categorias</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Grid de Posts */}
        <div className="gridPosts grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
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
                slug={post.slug}
                readingTime="" // Adicione este campo se necessário
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilteredPostsGrid;