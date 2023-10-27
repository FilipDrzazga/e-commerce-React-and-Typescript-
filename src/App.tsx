import React from "react";
import WelcomeScreen from "./Pages/WelcomeScreen/WelcomeScreen";

import GlobalStyle from "./Style/GlobalStyle.styled";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <WelcomeScreen />
    </>
  );
};

export default App;
