import { type FC } from "react";
import { useWebContext } from "../../Context/Context";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { MenuIcon, ShopBagIcon } from "../../assets/icons";

import * as S from "./Navigation.styled";

const Header: FC = () => {
  const WebCtx = useWebContext();

  return (
    <>
      <S.Header>
        <S.Nav>
          <S.MenuBtn>
            <MenuIcon />
            <span>MENU</span>
          </S.MenuBtn>
          <S.Title>
            wines<span>store</span>
          </S.Title>
          <S.ShopBtn onClick={() => WebCtx.displayShoppingCart(true)}>
            <ShopBagIcon />
          </S.ShopBtn>
        </S.Nav>
      </S.Header>
      {WebCtx.isShoppingCartVisible && <ShoppingCart />}
    </>
  );
};

export default Header;
