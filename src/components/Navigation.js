import React, { useEffect, useRef } from "react";
import {
  Box,
  Branding,
  List,
  Text,
  theme,
} from "@nulogy/components";
import styled from "styled-components";
import findMatchingPath from "../utils/findMatchingPath";
import { routes } from "../data/routes";
import { motion } from "framer-motion";

const variants = {
  hover: {
    left: theme.space.x1,
    textDecoration: "underline",
  },
};

const NavigationLink = styled(motion.a)(({ selected }) => ({
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

const NavigationHeading = ({ children }) => (
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

const Navigation = ({ location }) => {
  const selectedRef = useRef(null);

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
        <a style={{ textDecoration: "none" }} href="/" textDecoration="none">
          <Branding
            size="large"
            logoColor="white"
            withLine
            mt="x4"
            mb="x8"
            subtext="Content Guide"
          />
        </a>
      </Box>
      {sortedRoutes.map((menuItem) => (
        <Box mb="x6" key={menuItem.name}>
          <NavigationHeading>{menuItem.name}</NavigationHeading>
          <List pl="0">
            <>
              {menuItem.links.map((menuLink) => {
                const selected =
                  menuLink.href === findMatchingPath(location?.pathname)?.href;
                return (
                  <Text key={menuLink.href}>
                    <NavigationLink
                      variants={variants}
                      whileHover="hover"
                      selected={selected}
                      ref={selected ? selectedRef : null}
                      href={menuLink.href}
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
              <NavigationLink
                variants={variants}
                whileHover="hover"
                href="https://nulogy.design"
              >
                Back to nulogy.design
              </NavigationLink>
            </Text>             
          </List>   
        </Box>       
    </>
  );
};

export default Navigation;
