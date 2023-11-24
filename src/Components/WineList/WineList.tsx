import { type FC } from "react";
import { AddBtnIcon, RemoveBtnIcon } from "../../assets/icons/index";
import * as S from "./WineList.styled";
import smallRedWine from "../../assets/images/small-red-wine.png";

const WineList: FC = () => {
  return (
    <S.Section>
      <S.List>
        <S.Item>
          <S.ItemImgContainer>
            <S.ItemImg src={smallRedWine} alt="small wine" />
          </S.ItemImgContainer>
          <S.RemoveBtn>
            <AddBtnIcon />
          </S.RemoveBtn>
          <S.AddBtn>
            <RemoveBtnIcon />
          </S.AddBtn>
          <S.ItemDescriptionContainer>
            <S.ItemName>Angelicall Rosé 2014</S.ItemName>
            <S.ItemPrice>£10.99</S.ItemPrice>
          </S.ItemDescriptionContainer>
        </S.Item>
      </S.List>
    </S.Section>
  );
};

export default WineList;
