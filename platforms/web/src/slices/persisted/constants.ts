export const PERSISTED_SCOPE = "persisted";

export const initialState = {
  device: {
    id: Math.random().toString(36),
  },
  experimental: {
    invert: false,
  },
  conversations: {},
};
