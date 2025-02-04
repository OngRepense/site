const contentful = require('contentful');

// Função auxiliar para formatar URLs
function formatImageUrl(url) {
  if (!url) return null;
  if (url.startsWith('//')) return `https:${url}`;
  if (!url.startsWith('http')) return `https://${url}`;
  return url;
}

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getBlogPosts() {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      include: 2,
      order: '-fields.publishedDate'
    });

    return entries.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title || 'Sem título',
      slug: item.fields.slug || 'sem-slug',
      content: item.fields.content || '',
      category: item.fields.category || 'Geral',
      image: item.fields.image ? item.fields.image.fields.file.url : null,
      publishedDate: item.fields.publishedDate || new Date().toISOString(),
      author: item.fields.author || 'Autor desconhecido'
    }));
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
}

export async function getBlogPost(slug) {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 2,
      limit: 1
    });

    if (!entries.items.length) return null;

    const item = entries.items[0];
    return {
      id: item.sys.id,
      title: item.fields.title || 'Sem título',
      slug: item.fields.slug || 'sem-slug',
      content: item.fields.content || '',
      category: item.fields.category || 'Geral',
      image: item.fields.image ? formatImageUrl(item.fields.image.fields.file.url) : null,
      publishedDate: item.fields.publishedDate || new Date().toISOString(),
      author: item.fields.author || 'Autor desconhecido'
    };
  } catch (error) {
    console.error(`Erro ao buscar post ${slug}:`, error);
    return null;
  }
}