import { type FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AddBtnIcon, RemoveBtnIcon } from "../../assets/icons/index";
import { useWebContext } from "../../Context/Context";

import * as S from "./WineList.styled";

const WineList: FC = () => {
  const WebCtx = useWebContext();

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
                  <S.ItemImg src={wine.image} alt="bootle of wine" />
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

export default WineList;
