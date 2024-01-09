import { useEffect } from "react";
import { Box, Link, Text } from "@nulogy/components";
import routes from "../routes";
import { Link as RouterLink, useLocation } from "react-router-dom";
import useTitleUpdate from "../hooks/useTitle";

const allPaths = routes.flatMap((menuItem) =>
	menuItem.links.map((menuLink) => {
		return menuLink.path;
	}),
);

const allPageTitles = routes.flatMap((menuItem) =>
	menuItem.links.map((menuLink) => {
		return menuLink.title ? menuLink.title : menuLink.name;
	}),
);

const PageNavigation = () => {
	const location = useLocation();

	const currentPath = location.pathname;
	const currentIndex = allPaths.indexOf(currentPath);
	const currentTitle = allPageTitles[currentIndex];

	useTitleUpdate(currentTitle);

	const previousPage = {
		path: allPaths[currentIndex - 1],
		title: allPageTitles[currentIndex - 1],
	};

	const nextPage = {
		path: allPaths[currentIndex + 1],
		title: allPageTitles[currentIndex + 1],
	};

	return (
		<Box
			display={{ extraSmall: "block", small: "flex" }}
			maxWidth={{ extraSmall: "100%", small: "1024px" }}
			py="x1"
			m="0 auto"
			justifyContent="space-between"
		>
			<Box mb={{ extraSmall: "x2", small: 0 }}>
				{currentIndex === 0 && (
					<Link as={RouterLink} to="/">
						‹ Last section: <Text as="span">Nulogy content guide</Text>
					</Link>
				)}
				{previousPage.path && (
					<Link as={RouterLink} to={previousPage.path}>
						‹ Last section:{" "}
						<Text as="span" textTransform="lowercase">
							{previousPage.title}
						</Text>
					</Link>
				)}
			</Box>
			<Box>
				{nextPage.path && (
					<Link as={RouterLink} to={nextPage.path}>
						Next section:{" "}
						<Text as="span" textTransform="lowercase">
							{nextPage.title}
						</Text>{" "}
						›
					</Link>
				)}
			</Box>
		</Box>
	);
};

export default PageNavigation;
