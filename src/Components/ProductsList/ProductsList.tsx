import { type FC, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AddBtnIcon, RemoveBtnIcon } from "../../assets/icons/index";
import InfiniteScroll from "react-infinite-scroll-component";
import { useWebContext } from "../../Context/Context";

import * as S from "../ProductsList/ProductsList.styled";

type LocationState = {
  pathname: string;
};

const ProductsList: FC = () => {
  const WebCtx = useWebContext();
  const { winesType } = useParams<string>();
  const { pathname } = useLocation() as LocationState;

  useEffect(() => {
    WebCtx.fetchWinesByType(winesType);
  }, []);

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.style.overflow = WebCtx.isShoppingCartVisible ? "hidden" : "auto";
  }, [WebCtx.isShoppingCartVisible]);

  return (
    <S.Section>
      <InfiniteScroll
        dataLength={WebCtx.data.length}
        next={WebCtx.displayDataPage}
        hasMore={true}
        loader={<p>Loading...</p>}
      >
        <S.List>
          {WebCtx.data?.map((wines) =>
            wines?.map((wine) => (
              <S.Item key={wine.id}>
                <S.ItemImgContainer>
                  <S.ItemLink to={`${pathname}/${wine.wine}`} state={{ ...wine, wineType: winesType }}>
                    <S.ItemImg src={wine.image} alt="bootle of wine" />
                  </S.ItemLink>
                </S.ItemImgContainer>
                <S.ItemDescriptionContainer>
                  <S.ItemName>{wine.wine}</S.ItemName>
                  <S.ItemPrice>£10.99</S.ItemPrice>
                </S.ItemDescriptionContainer>
              </S.Item>
            ))
          )}
        </S.List>
      </InfiniteScroll>
    </S.Section>
  );
};

export default ProductsList;
