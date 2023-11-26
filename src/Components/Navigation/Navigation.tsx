import { type FC } from "react";
import { MenuIcon, ShopBagIcon } from "../../assets/icons";

import * as S from "./Navigation.styled";

const Header: FC = () => {
  return (
    <S.Header>
      <S.Nav>
        <S.MenuBtn>
          <MenuIcon />
          <span>MENU</span>
        </S.MenuBtn>
        <S.Title>
          wines<span>store</span>
        </S.Title>
        <S.ShopBtn>
          <ShopBagIcon />
        </S.ShopBtn>
      </S.Nav>
    </S.Header>
  );
};

export default Header;