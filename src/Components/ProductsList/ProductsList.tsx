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
  const { pathname } = useLocation() as LocationState;
  const { winesType } = useParams<string>();

  useEffect(() => {
    WebCtx.fetchWinesByType(winesType);
    // WebCtx.displayDataPage();
  }, [winesType]);

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
