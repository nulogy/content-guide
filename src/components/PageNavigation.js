import React from "react";
import { Box, Link, Text } from "@nulogy/components";
import { CODE_WIDTH } from "../components/CONSTANTS";
import { routes } from "../data/routes";
import findMatchingPath from "../utils/findMatchingPath";

const allPaths = routes.map((menuItem) =>
  menuItem.links.map((menuLink) => {
    return menuLink.href;
  })
).flat();

const allPageTitles = routes.map((menuItem) =>
  menuItem.links.map((menuLink) => {
    return menuLink.title ? menuLink.title : menuLink.name;
  })
).flat();

const PageNavigation = ({ location }) => {
  const currentPath = findMatchingPath(location?.pathname)?.href;
  const currentIndex = allPaths.indexOf(currentPath);

  const previousPage = {
    path: allPaths[currentIndex - 1], 
    title: allPageTitles[currentIndex - 1],
  }

  const nextPage = {
    path: allPaths[currentIndex + 1],
    title: allPageTitles[currentIndex + 1]
  }

  return (
    <Box
      display={{extraSmall: 'block', small: 'flex'}}
      maxWidth={{extraSmall: '100%', small: CODE_WIDTH}}
      py="x1"
      m="0 auto"
      justifyContent="space-between"
    >
      <Box mb={{extraSmall: 'x2', small: 0}}>
        {currentIndex === 0 && <Link href='/'>‹ Last section: <Text as="span">Nulogy content guide</Text></Link>}
        {previousPage.path && <Link href={previousPage.path}>‹ Last section: <Text as="span" textTransform="lowercase">{previousPage.title}</Text></Link>}
      </Box>
      <Box>
        {nextPage.path && <Link href={nextPage.path}>Next section: <Text as="span" textTransform="lowercase">{nextPage.title}</Text> ›</Link>}
      </Box>
    </Box>
  );
};

export default PageNavigation;
