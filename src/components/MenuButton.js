import React from "react";
import { AnimatedBox, Box } from "@nulogy/components";
import styled from "styled-components";

const Button = styled(Box)(({ isOpen, theme }) => ({
  border: "none",
  background: "none",
  position: "absolute",
  top: theme.space.x4,
  right: theme.space.x2,
  padding: theme.space.half,
  lineHeight: 0,
}));

const MenuButton = ({ isOpen, onClick }) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -10,
    },
  };
  const lineProps = {
    height: "2px",
    width: "20px",
    mb: "4px",
    bg: isOpen ? "white" : "darkBlue",
    initial: "closed",
    animate: variant,
  };
  return (
    <Button
      as="button"
      isOpen={isOpen}
      display={{ extraSmall: "block", medium: "none" }}
      onClick={onClick}
      aria-label={isOpen ? "close" : "open"}
      css={{
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <AnimatedBox variants={top} {...lineProps} />
      <AnimatedBox variants={center} {...lineProps} />
      <AnimatedBox variants={bottom} {...lineProps} />
    </Button>
  );
};

export default MenuButton;
