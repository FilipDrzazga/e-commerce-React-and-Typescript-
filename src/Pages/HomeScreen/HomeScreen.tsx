import { type FC } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Menu from "../../Components/Menu/Menu";

import * as S from "./HomeScreen.styled";

const HomeScreen: FC = () => {
  return (
    <S.Container>
      <Navigation />
      <Menu />
    </S.Container>
  );
};

export default HomeScreen;
