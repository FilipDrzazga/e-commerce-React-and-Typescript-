import React from "react";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";

import * as S from "./HomeScreen.styled";

const HomeScreen: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <Menu />
    </S.Container>
  );
};

export default HomeScreen;
