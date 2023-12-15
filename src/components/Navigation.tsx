import { useEffect, useRef } from "react";
import {
	Box,
	Branding,
	List,
	Text,
	theme,
	Link as NDSLink,
} from "@nulogy/components";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { routes } from "./routes";

const NavigationLink = styled("a")<{ selected?: boolean }>(({ selected }) => ({
	fontSize: "20px",
	color: selected ? theme.colors.yellow : theme.colors.white,
	display: "inline-block",
	paddingX: theme.space.half,
	textDecoration: "none",
	marginBottom: theme.space.x2,
	position: "relative",
	left: 0,
}));

const sortedRoutes = routes.map((navGroup) => {
	if (navGroup.name === "Components") {
		return {
			...navGroup,
			links: navGroup.links.sort((a, b) => a.name.localeCompare(b.name)),
		};
	}
	return navGroup;
});

const NavigationHeading = ({ children }: { children: React.ReactNode }) => (
	<Text
		fontSize="14px"
		color="whiteGrey"
		textTransform="uppercase"
		fontWeight="bold"
		marginY="x3"
		mb="x2"
	>
		{children}
	</Text>
);

const Navigation = () => {
	const location = useLocation();
	const selectedRef = useRef<HTMLAnchorElement | null>(null);

	useEffect(() => {
		if (selectedRef && selectedRef.current && location?.pathname !== "/") {
			selectedRef.current.scrollIntoView({
				block: "center",
			});
		}
	}, [location]);

	return (
		<>
			<Box mb="x8" mt="-24px">
				<NDSLink
					style={{ textDecoration: "none" }}
					href="/"
					textDecoration="none"
				>
					<Box mt="x4" mb="x8">
						<Branding
							size="large"
							logoColor="white"
							withLine
							subtext="Content Guide"
						/>
					</Box>
				</NDSLink>
			</Box>
			{sortedRoutes.map((menuItem) => (
				<Box mb="x6" key={menuItem.name}>
					<NavigationHeading>{menuItem.name}</NavigationHeading>
					<List pl="0">
						<>
							{menuItem.links.map((menuLink) => {
								const selected = menuLink.href === location.pathname;

								return (
									<Text key={menuLink.href}>
										<NavigationLink
											as={Link}
											selected={selected}
											ref={selected ? selectedRef : null}
											to={menuLink.href}
										>
											{menuLink.name}
										</NavigationLink>
									</Text>
								);
							})}
						</>
					</List>
				</Box>
			))}
			<Box mb="x6">
				<NavigationHeading>Nulogy Design System</NavigationHeading>
				<List pl="0">
					<Text>
						<NavigationLink href="https://nulogy.design">
							Back to nulogy.design
						</NavigationLink>
					</Text>
				</List>
			</Box>
		</>
	);
};

export default Navigation;
