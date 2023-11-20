import { FC } from "react";
import { ArrowIcon, SearchIcon } from "../../assets/icons";
import * as S from "./SearchSortPanel.styled";

const SearchSortPanel: FC = () => {
  return (
    <S.Section>
      <S.InputContainer>
        <label htmlFor="wineName"></label>
        <S.Input id="wineName" type="text" name="wineName" placeholder="name"></S.Input>
        <SearchIcon />
      </S.InputContainer>
      <S.Button>
        price
        <ArrowIcon />
      </S.Button>
    </S.Section>
  );
};

export default SearchSortPanel;
