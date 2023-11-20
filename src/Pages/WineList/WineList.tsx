import { type FC } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import WineListDescription from "../../Components/WineListDescription/WineListDescription";
import SearchSortPanel from "../../Components/SearchSortPanel/SearchSortPanel";

import * as S from "./WineList.styled";

const WineList: FC = () => {
  return (
    <S.Container>
      <Navigation />
      <WineListDescription />
      <SearchSortPanel />
    </S.Container>
  );
};

export default WineList;
