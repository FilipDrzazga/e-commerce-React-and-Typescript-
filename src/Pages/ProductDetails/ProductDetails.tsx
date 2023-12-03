import { FC } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Product from "../../Components/Product/Product";
import * as S from "./ProductDetails.styled";

const ProductDetails: FC = () => {
  return (
    <S.Container>
      <Navigation></Navigation>
      <Product></Product>
    </S.Container>
  );
};

export default ProductDetails;
