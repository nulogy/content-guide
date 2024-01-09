import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NDSProvider } from "@nulogy/components";
import { CustomMDXProvider } from "./components/CustomMDXProvider";
import App from "./App";

const newTheme = {
  fontSizes: {
    smaller: "12px",
    small: "16px",
    medium: "20px",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomMDXProvider>
      <NDSProvider theme={newTheme}>
        <App />
      </NDSProvider>
    </CustomMDXProvider>
  </React.StrictMode>
);
