declare module '@/lib/contentful' {
  export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    image?: string;
    publishedDate: string;
    category: string;
    author: string;
    destaque: boolean;
  }
  
  export function getBlogPosts(): Promise<BlogPost[]>;
  export function getBlogPost(slug: string): Promise<BlogPost | null>;
}
