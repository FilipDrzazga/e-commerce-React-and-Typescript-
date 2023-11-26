import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import WebContextProvider from "./Context/Context";
import GlobalStyle from "./Style/GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import theme from "./Style/theme.styled";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WebContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WebContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
