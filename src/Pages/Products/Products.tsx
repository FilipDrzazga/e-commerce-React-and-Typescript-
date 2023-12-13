import { type FC } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import ProductsDescriptio from "../../Components/ProductsDescription/ProductsDescription";
import SearchSortPanel from "../../Components/SearchSortPanel/SearchSortPanel";
import ProductsList from "../../Components/ProductsList/ProductsList";

import * as S from "./Products.styled";

const Products: FC = () => {
  return (
    <S.Container>
      <Navigation />
      <ProductsDescriptio />
      <SearchSortPanel />
      <ProductsList />
    </S.Container>
  );
};

export default Products;
