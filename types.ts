export enum Category {
  MUSIC = 'music',
  VIDEO = 'video',
  IMAGES = 'images',
  TEXT = 'text'
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: Category;
  excerpt: string;
  content: string; 
  imageUrl: string;
  featured?: boolean;
  author: string;
  date: string;
}
