import React from "react";
import { NDSProvider } from "@nulogy/components";
import Layout from "./src/components/Layout";

const newTheme = {
  fontSizes: {
    small: "16px",
    medium: "20px",
  },
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <NDSProvider theme={newTheme}>
      <Layout {...props}>{element}</Layout>
    </NDSProvider>
  );
};
