import { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useWebContext } from "../../Context/Context";
import { splitCountryAndCityRegex } from "../../helpers";
import * as S from "../Product/Product.styled";

type LocationState = {
  state: {
    winery: string;
    wine: string;
    wineType: string;
    rating: {
      average: string;
      reviews: string;
    };
    location: string;
    image: string;
    id: number;
  };
  pathname: string;
};

type QuantityValue = "add" | "remove";

const Product: FC = () => {
  const WebCtx = useWebContext();
  const [productQuantity, setProductQuatity] = useState<number>(1);
  const { state, pathname } = useLocation() as LocationState;

  const handleQuantityProduct = (value: QuantityValue): void => {
    if (value === "add") {
      setProductQuatity((prevState) => prevState + 1);
    } else if (value === "remove") {
      productQuantity === 1 ? setProductQuatity(1) : setProductQuatity((prevState) => prevState - 1);
    }
  };

  const handleAddProductToCart = (): void => {
    const productDetails: Partial<LocationState["state"]> = {
      image: state.image,
      wine: state.wine,
      wineType: state.wineType,
      id: state.id,
    };
    const productCost: { quantity: number; capacity: string; price: number } = {
      quantity: productQuantity,
      capacity: "750ml",
      price: 10.99,
    };
    const product = Object.assign(productDetails, productCost);
    WebCtx.addToShoppingCart(product);
    setProductQuatity(1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <S.ProductSection>
        <S.ProductImgContainer>
          <img src={state.image} alt="bootle of wine" />
        </S.ProductImgContainer>
        <S.ProductContainer>
          <S.ProductName>{state.wine}</S.ProductName>
          <S.ProductDescription>
            Lorem ipsum dolor sit amet consectetur. Quis et convallis euismod eu morbi arcu maecenas. Non dictumst.Quis
            et convallis euismod eu morbi arcu maecenas. Non dictumst.
          </S.ProductDescription>
          <S.ProductCost>
            £10.99
            <span>/ 750ml</span>
          </S.ProductCost>
          <S.BtnsContainer>
            <S.BtnsFrame>
              <S.BtnRemove $isLessPossible={productQuantity} onClick={() => handleQuantityProduct("remove")}>
                -
              </S.BtnRemove>
              <S.Counter>{productQuantity}</S.Counter>
              <S.BtnAdd onClick={() => handleQuantityProduct("add")}>+</S.BtnAdd>
            </S.BtnsFrame>
            <S.AddToCardBtn onClick={() => handleAddProductToCart()}>ADD TO CART</S.AddToCardBtn>
          </S.BtnsContainer>
        </S.ProductContainer>
      </S.ProductSection>
      <S.ProductDetailsSection>
        <S.LinesContainer>
          <S.Line></S.Line>
          <h2>DETAILS</h2>
          <S.Line></S.Line>
        </S.LinesContainer>
        <S.DetailsList>
          <li>
            <header>
              <h2>WINE TYPE</h2>
            </header>
            <p>{state.wineType}</p>
          </li>
          <li>
            <header>
              <h2>PRODUCER</h2>
            </header>
            <p>{state.winery}</p>
          </li>
          <li>
            <header>
              <h2>VINTAGE</h2>
            </header>
            <p>1997</p>
          </li>
          <li>
            <header>
              <h2>COUNTRY</h2>
            </header>
            <p>{splitCountryAndCityRegex(state.location)?.country}</p>
          </li>
          <li>
            <header>
              <h2>LOCATION</h2>
            </header>
            <p>{splitCountryAndCityRegex(state.location)?.city}</p>
          </li>
          <li>
            <header>
              <h2>GRAPE</h2>
            </header>
            <p>100% Sangiovese</p>
          </li>
        </S.DetailsList>
      </S.ProductDetailsSection>
    </>
  );
};

export default Product;
