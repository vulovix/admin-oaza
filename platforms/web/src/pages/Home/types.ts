import { Article, Category } from "../Publish/types";

export interface HomePageState {
  article: Article | undefined;
  articles: Array<Article>;
  categorizedArticles: Array<Article>;
  categories: Array<Category>;
  loading: boolean;
}
