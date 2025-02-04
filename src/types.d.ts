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
    }
    
    export function getBlogPosts(): Promise<BlogPost[]>;
}
// src/types.d.ts
declare module '@contentful/rich-text-react-renderer' {
    export function documentToReactComponents(document: any, options?: any): React.ReactNode;
}