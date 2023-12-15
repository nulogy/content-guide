import { ApplicationFrame, Box } from "@nulogy/components";
import { createGlobalStyle } from "styled-components";
import Transition from "./components/Transition";
import PageNavigation from "./components/PageNavigation";
import Navigation from "./components/Navigation";
import MenuButton from "./components/MenuButton";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const ForceThingsToBeInline = createGlobalStyle`
  .inline {display: inline}
`;

export default function Layout() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ApplicationFrame overflow="auto">
			<ForceThingsToBeInline />
			<Box display={{ medium: "flex" }} mb="x6">
				<Box
					width={{ medium: "calc(100% - 340px)" }}
					marginLeft={{ medium: "340px" }}
				>
					<Transition>
						<Box
							as="main"
							paddingTop="x6"
							paddingX={{ extraSmall: "x6", medium: "x8" }}
						>
							<Box mb="x6">
								<Outlet />
							</Box>
							<PageNavigation />
						</Box>
					</Transition>
				</Box>
				<Box
					as="aside"
					top={isOpen && "0"}
					opacity={{ extraSmall: isOpen ? "1" : "0", medium: "1" }}
					position="fixed"
					height="100%"
					overflow="auto"
					width={{ extraSmall: "100%", medium: "340px" }}
					px="x8"
					py="x8"
					transition="opacity 0.2s linear"
					bg="darkBlue"
				>
					<Navigation />
				</Box>
				<MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			</Box>
		</ApplicationFrame>
	);
}
