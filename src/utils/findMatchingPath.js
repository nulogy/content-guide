import { routes } from "../data/routes";

const findMatchingPath = (pathname) => {
  const trimSlashes = (path) => path.replace(/^\/|\/$/g, "");
  const currentPath = trimSlashes(pathname || "");
  const allPages = routes.reduce(
    (acc, menuItem) => [...menuItem.links, ...acc],
    []
  );
  const currentMenuItem = allPages.find(({ href }) => {
    return trimSlashes(href) === currentPath;
  });
  return currentMenuItem;
};

export default findMatchingPath;
