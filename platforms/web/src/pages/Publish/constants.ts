import { PublishState } from "./types";

export const PUBLISH_SCOPE = "publish";

export const initialState: PublishState = {
  loading: false,
  error: null,
  article: null,
  articles: [],
  categories: [],
};

export const getDefaultArticle = () => {
  const randomId = Date.now();
  return ({
    slug: `unknown-${randomId}`,
    image: "/images/no-photo.png",
    title: "Title",
    public: false,
    subtitle: "Subtitle...",
    description: encodeURIComponent(`{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}`),
    categories: [],
  })
}