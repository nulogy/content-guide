import React, { useState } from "react";
import { ApplicationFrame, Box } from "@nulogy/components";
import { createGlobalStyle } from "styled-components";
import Navigation from "./Navigation";
import Transition from "./Transition";
import MenuButton from "./MenuButton";
import Helmet from "./Helmet";

const ForceThingsToBeInline = createGlobalStyle`
  .inline {display: inline}
`;

const Layout = ({ children, location, noPadding }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ApplicationFrame overflow={isOpen ? "hidden" : "auto"}>
      <Helmet location={location} />
      <ForceThingsToBeInline />
      <Box display={{ medium: "flex" }} mb="x6">
        <Box
          width={{ medium: "calc(100% - 340px)" }}
          marginLeft={{ medium: "340px" }}
        >
          <Transition location={location}>
            <Box
              as="main"
              paddingTop={noPadding ? null : "x6"}
              paddingX={noPadding ? null : { extraSmall: "x6", medium: "x8" }}
            >
              <Box mb="x6">{children}</Box>
            </Box>
          </Transition>
        </Box>
        <Box
          as="aside"
          position="fixed"
          top={isOpen && "0"}
          height="100%"
          overflow="auto"
          width={{ extraSmall: "100%", medium: "340px" }}
          px="x8"
          py="x8"
          opacity={{ extraSmall: isOpen ? "1" : "0", medium: "1" }}
          transition="opacity 0.2s linear"
          bg="darkBlue"
        >
          <Navigation location={location} />
        </Box>
        <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </Box>
    </ApplicationFrame>
  );
};

export default Layout;
