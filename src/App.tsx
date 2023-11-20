import React from "react";
import WelcomeScreen from "./Pages/WelcomeScreen/WelcomeScreen";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import WineList from "./Pages/WineList/WineList";

import GlobalStyle from "./Style/GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import theme from "./Style/theme.styled";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <WelcomeScreen /> */}
        {/* <HomeScreen /> */}
        <WineList />
      </ThemeProvider>
    </>
  );
};

export default App;
