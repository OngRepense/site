"use client";

import { useState, useEffect } from "react";
import DestaquePost from "@components/blog/destaquePost";
import RecentePost from "@components/blog/recentePost";
import CardPost from "@components/blog/cardPost";

interface Post {
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
}

const posts: Post[] = [
  {
    title: "Lorem Ipsum",
    date: "02 de Dezembro 2024",
    readingTime: "3 min. de leitura",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Vagas",
    imageSrc: "/assets/images/blogBanner.png",
    imageAlt: "Imagem do post",
  },
  {
    title: "Novo Design Trends",
    date: "10 de Dezembro 2024",
    readingTime: "5 min. de leitura",
    summary:
      "Descubra as novas tendências de design para o próximo ano e como aplicá-las no seu trabalho.",
    category: "Design",
    imageSrc: "/assets/images/blogBanner.png",
    imageAlt: "Imagem do post",
  },
  {
    title: "Novo",
    date: "10 de Dezembro 2024",
    readingTime: "5 min. de leitura",
    summary:
      "Descubra as novas tendências de design para o próximo ano e como aplicá-las no seu trabalho.",
    category: "Design",
    imageSrc: "/assets/images/blogBanner.png",
    imageAlt: "Imagem do post",
  },
  // Adicione mais posts conforme necessário
];

// Função para obter categorias únicas
const getCategories = (posts: Post[]) => {
  return Array.from(new Set(posts.map((post) => post.category)));
};

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState(""); // Termo de busca
  const [categoryFilter, setCategoryFilter] = useState(""); // Categoria selecionada
  const [filteredPosts, setFilteredPosts] = useState(posts); // Posts filtrados

  const categories = getCategories(posts);

  // Atualiza os posts filtrados com base na pesquisa e categoria
  useEffect(() => {
    const filtered = posts.filter((post) => {
      const matchesTitle = post.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter ? post.category === categoryFilter : true;
      return matchesTitle && matchesCategory;
    });
    setFilteredPosts(filtered);
  }, [searchTerm, categoryFilter]);

  return (
    <div>
      <section className="bannerHome max-md:pb-16 py-32">
        <div className="innerWidth max-lg:flex-col max-md:gap-8 max-w-8xl flex items-center justify-between items-stretch gap-16 px-4 mx-auto">
          <div className="postsEmDestaque w-full flex flex-col gap-6">
            <h2 className="text-primary max-md:text-5xl font-caveat text-6xl font-bold">Destaques</h2>
            <div className="w-full flex flex-col gap-6">
              <DestaquePost
                title="Lorem Ipsum"
                date="02 de Dezembro 2024"
                readingTime="3 min. de leitura"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
                imageSrc="/assets/images/blogBanner.png"
                imageAlt="Imagem do post"
              />
              <DestaquePost
                title="Lorem Ipsum"
                date="02 de Dezembro 2024"
                readingTime="3 min. de leitura"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
                imageSrc="/assets/images/blogBanner.png"
                imageAlt="Imagem do post"
              />
            </div>
          </div>
          <div className="postsRecentes lg:max-w-[494px] w-full flex flex-col gap-6">
            <h2 className="text-tertiary max-md:text-5xl font-caveat text-6xl font-bold">Recentes</h2>
            <div className="w-full h-full flex flex-col gap-6">
              <RecentePost
                title="Lorem Ipsum"
                date="02 de Dezembro 2024"
                readingTime="3 min. de leitura"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
                imageSrc="/assets/images/blogBanner.png"
                imageAlt="Imagem do post"
              />
              <RecentePost
                title="Lorem Ipsum"
                date="02 de Dezembro 2024"
                readingTime="3 min. de leitura"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
                imageSrc="/assets/images/blogBanner.png"
                imageAlt="Imagem do post"
              />
              <RecentePost
                title="Lorem Ipsum"
                date="02 de Dezembro 2024"
                readingTime="3 min. de leitura"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
                imageSrc="/assets/images/blogBanner.png"
                imageAlt="Imagem do post"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="blogHome max-md:py-16 bg-tertiary py-32">
        <div className="innerWidth max-w-8xl flex flex-col items-center justify-center gap-16 px-4 mx-auto">
          <h2 className="text-primary max-md:text-3xl max-md:text-center font-caveat text-6xl text-secondary font-bold">Nosso blog</h2>
          <div className="w-full flex flex-col gap-8">
            {/* Input de Pesquisa e ComboBox */}
            <div className="w-full">
              <form className="flex max-md:gap-4 items-center gap-8 w-full max-w-4xl">
                <div className="max-lg:max-w-full max-w-[432px] w-full relative">
                  <input
                    type="text"
                    name="search"
                    placeholder="Pesquisar posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-lg:max-w-full max-w-[432px] w-full pl-4 pr-10 py-2 bg-secondary text-tertiary border border-secondary rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary placeholder:text-tertiary"
                  />
                </div>
                <select
                  name="category"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className=" h-[42px] px-4 py-2 bg-secondary text-tertiary border border-secondary rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary"
                >
                  <option value="">Todas as categorias</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            {/* Posts Filtrados */}
            <div className="gridPosts grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <CardPost
                    key={index}
                    title={post.title}
                    date={post.date}
                    readingTime={post.readingTime}
                    summary={post.summary}
                    category={post.category}
                    imageSrc={post.imageSrc}
                    imageAlt={post.imageAlt}
                  />
                ))
              ) : (
                <p className="text-lg text-gray-600 mt-4">Nenhum post encontrado.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
