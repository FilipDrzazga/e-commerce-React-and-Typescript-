import { type FC } from "react";
import { AddBtnIcon, RemoveBtnIcon } from "../../assets/icons/index";
import { useWebContext } from "../../Context/Context";

import * as S from "./WineList.styled";

const WineList: FC = () => {
  const WebCtx = useWebContext();
  return (
    <S.Section>
      <S.List>
        {WebCtx.fetchedData?.map((wine) => (
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
        ))}
      </S.List>
    </S.Section>
  );
};

export default WineList;
