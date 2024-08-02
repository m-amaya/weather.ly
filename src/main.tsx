import "@fontsource-variable/inter"; // Supports weights 100-900
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { App } from "@src/App";
import { resolver, theme } from "@src/tokens/theme.ts";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={theme}
      cssVariablesResolver={resolver}
      defaultColorScheme="light"
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
