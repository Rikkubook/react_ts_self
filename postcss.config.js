export default {
  plugins: {
    "postcss-import": {}, // 使其可以在css使用@import
    "tailwindcss/nesting": "postcss-nesting", //使其可以在css 使用曹狀
    tailwindcss: {},
    autoprefixer: {},
  },
};
