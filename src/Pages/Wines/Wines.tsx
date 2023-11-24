import { type FC } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import WineListDescription from "../../Components/WineListDescription/WineListDescription";
import SearchSortPanel from "../../Components/SearchSortPanel/SearchSortPanel";
import WineList from "../../Components/WineList/WineList";

import * as S from "./Wines.styled";

const Wines: FC = () => {
  return (
    <S.Container>
      <Navigation />
      <WineListDescription />
      <SearchSortPanel />
      <WineList />
    </S.Container>
  );
};

export default Wines;
