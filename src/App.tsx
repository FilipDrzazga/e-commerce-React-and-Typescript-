import React from "react";
import WelcomeScreen from "./Pages/WelcomeScreen/WelcomeScreen";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";

import GlobalStyle from "./Style/GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import theme from "./Style/theme.styled";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <WelcomeScreen /> */}
        <HomeScreen />
      </ThemeProvider>
    </>
  );
};

export default App;
