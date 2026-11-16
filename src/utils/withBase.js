// Prefixes public asset paths with the Vite base URL so the site works both
// locally and when deployed to a GitHub Pages project sub-path.
const withBase = (path) => {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

const IMAGE_KEYS = ["coverImage", "image", "image2", "image3", "image4", "icon"];

export const withBaseList = (items) =>
  items.map((item) => {
    const mapped = { ...item };
    IMAGE_KEYS.forEach((key) => {
      if (mapped[key]) mapped[key] = withBase(mapped[key]);
    });
    return mapped;
  });

export default withBase;
