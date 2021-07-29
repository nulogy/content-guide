import React from "react";
import { Icon, Box } from "@nulogy/components";

export const YesExample = ({ children, ...props }) => (
  <Box fontStyle="italic" {...props}>
    <Box display="inline" position="relative" top="half">
      <Icon icon="check" color="green" mr="x2" />
    </Box>
    {children}
  </Box>
);

export const NoExample = ({ children, ...props }) => (
  <Box fontStyle="italic" {...props}>
    <Box display="inline" position="relative" top="half">
      <Icon icon="close" color="red" mr="x2" />
    </Box>
    {children}
  </Box>
);
