import React from "react";
import WelcomeScreen from "./Pages/WelcomeScreen/WelcomeScreen";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import Wines from "./Pages/Wines/Wines";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./Style/GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import theme from "./Style/theme.styled";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <WelcomeScreen/> */}
      <Routes>
        <Route index path="/home" element={<HomeScreen />} />
        <Route path="wines/:winesType" element={<Wines />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
