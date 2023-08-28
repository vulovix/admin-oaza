import { PublishState } from "./types";

export const PUBLISH_SCOPE = "publish";

export const initialState: PublishState = {
  loading: false,
  error: null,
  category: null,
  article: null,
  articles: [],
  categories: [],
};

export const getDefaultArticle = () => {
  const randomId = Date.now();
  return ({
    slug: `new-article-${randomId}`,
    image: "/images/no-photo.png",
    title: "New Article",
    public: false,
    subtitle: "Subtitle...",
    description: encodeURIComponent(`{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}`),
    categories: [],
  });
}

export const getDefaultCategory = () => {
  const randomId = Date.now();
  return ({
    slug: `new-category-${randomId}`,
    name: 'New Category',
  });
}