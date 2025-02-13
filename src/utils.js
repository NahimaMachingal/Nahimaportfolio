export const getImageUrl = (filename) => {
  return new URL(`../../assets/skills/${filename}`, import.meta.url).href;
};
