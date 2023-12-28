import { type FC } from "react";
import { useWebContext } from "../../Context/Context";
import Navigation from "../../Components/Navigation/Navigation";
import ProductsDescriptio from "../../Components/ProductsDescription/ProductsDescription";
import SearchSortPanel from "../../Components/SearchSortPanel/SearchSortPanel";
import ProductsList from "../../Components/ProductsList/ProductsList";

import * as S from "./Products.styled";

const Products: FC = () => {
  const WebCtx = useWebContext();
  return (
    <S.Container $isScroll={WebCtx.isShoppingCartVisible}>
      <Navigation />
      <ProductsDescriptio />
      <SearchSortPanel />
      <ProductsList />
    </S.Container>
  );
};

export default Products;
