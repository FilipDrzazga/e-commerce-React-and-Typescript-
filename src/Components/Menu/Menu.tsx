import { type FC } from "react";
import redWineImg from "../../assets/images/red-wine.jpg";

import * as S from "./Menu.styled";

const winesType: string[] = ["red", "whites", "rose", "dessert", "sparkling"];

const Menu: FC = () => {
  return (
    <S.Section>
      <S.Nav>
        <S.List>
          {winesType.map((wineType) => (
            <S.Item key={wineType}>
              <S.ItemLink to={`/wines/${wineType}`}>{wineType}</S.ItemLink>
            </S.Item>
          ))}
        </S.List>
      </S.Nav>
      <S.ImgContainer>
        <img src={redWineImg} alt="bootle of wine" />
      </S.ImgContainer>
    </S.Section>
  );
};

export default Menu;
