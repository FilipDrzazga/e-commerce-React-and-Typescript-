import React from "react";
import redWineImg from "../../assets/images/red-wine.jpg";

import * as S from "./Menu.styled";

const Menu: React.FC = () => {
  return (
    <S.Section>
      <S.Nav>
        <S.List>
          <S.Item>red</S.Item>
          <S.Item>whites</S.Item>
          <S.Item>rose</S.Item>
          <S.Item>dessert</S.Item>
          <S.Item>sparkling</S.Item>
        </S.List>
      </S.Nav>
      <S.ImgContainer>
        <img src={redWineImg} alt="bootle of wine" />
      </S.ImgContainer>
    </S.Section>
  );
};

export default Menu;
