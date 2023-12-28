import { FC } from "react";
import { useWebContext } from "../../Context/Context";
import Navigation from "../../Components/Navigation/Navigation";
import Product from "../../Components/Product/Product";
import * as S from "./ProductDetails.styled";

const ProductDetails: FC = () => {
  const WebCtx = useWebContext();
  return (
    <S.Container $isScroll={WebCtx.isShoppingCartVisible}>
      <Navigation></Navigation>
      <Product></Product>
    </S.Container>
  );
};

export default ProductDetails;
