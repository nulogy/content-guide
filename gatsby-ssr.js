import React from "react";
import { NDSProvider } from "@nulogy/components";
import Layout from "./src/components/Layout";

const newTheme = {
  fontFamilies: {
    base: "serif",
  },
  fontSizes: {
    small: "16px",
    medium: "20px",
  },
};

export const wrapPageElement = ({ element, props }) => {
  let path = props.location?.pathname;

  return (
    <NDSProvider theme={newTheme}>
      {path === "/" ? (
        <div>{element}</div>
      ) : (
        <Layout {...props}>{element}</Layout>
      )}
    </NDSProvider>
  );
};
