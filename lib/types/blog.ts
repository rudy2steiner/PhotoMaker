export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
  readingTime: string;
  tags: string[];
}

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: string;
  tags: string[];
}