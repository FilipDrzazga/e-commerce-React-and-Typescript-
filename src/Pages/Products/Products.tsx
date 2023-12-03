import { type FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWebContext } from "../../Context/Context";
import Navigation from "../../Components/Navigation/Navigation";
import ProductsDescriptio from "../../Components/ProductsDescription/ProductsDescription";
import SearchSortPanel from "../../Components/SearchSortPanel/SearchSortPanel";
import ProductsList from "../../Components/ProductsList/ProductsList";

import * as S from "./Products.styled";

const Products: FC = () => {
  const WebCtx = useWebContext();
  const { winesType } = useParams<string>();

  useEffect(() => {
    if (WebCtx.data.length === 0) {
      WebCtx.fetchWinesByType(winesType);
      WebCtx.displayDataPage();
    }
  }, []);

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
