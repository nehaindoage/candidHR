export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface BlogSummary {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  modified: string;
  image: { src: string; alt: string };
  categories: BlogCategory[];
  author: string;
}

export interface BlogPost extends BlogSummary {
  contentHtml: string;
  readingMinutes: number;
  meta: { title: string; description: string };
  link: string;
}
