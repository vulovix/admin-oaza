
export interface Article {
  _id: string;
  slug: string;
  image: string;
  title: string;
  public: boolean;
  subtitle: string;
  categories: Array<Category>;
  description: string;
  createdAt: number;
}
export interface Category {
  _id: string;
  slug: string;
  name: string;
  // createdAt: number;
}

export interface PublishState {
  loading: boolean;
  article: null | Article;
  category: null | Category;
  articles: Array<Article>;
  categories: Array<Category>;
  error: null | Error;
}
