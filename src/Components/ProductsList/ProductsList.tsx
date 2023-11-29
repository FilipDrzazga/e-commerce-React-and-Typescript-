import { type FC } from "react";
import { useLocation } from "react-router-dom";
import { AddBtnIcon, RemoveBtnIcon } from "../../assets/icons/index";
import InfiniteScroll from "react-infinite-scroll-component";
import { useWebContext } from "../../Context/Context";

import * as S from "../ProductsList/ProductsList.styled";

const ProductsList: FC = () => {
  const WebCtx = useWebContext();
  const location = useLocation();

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
                  <S.ItemLink to={`${location.pathname}/${wine.wine}`}>
                    <S.ItemImg src={wine.image} alt="bootle of wine" />
                  </S.ItemLink>
                </S.ItemImgContainer>
                <S.RemoveBtn>
                  <RemoveBtnIcon />
                </S.RemoveBtn>
                <S.AddBtn>
                  <AddBtnIcon />
                </S.AddBtn>
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
