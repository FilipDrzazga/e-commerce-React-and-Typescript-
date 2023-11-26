import { type FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import WineListDescription from "../../Components/WineListDescription/WineListDescription";
import SearchSortPanel from "../../Components/SearchSortPanel/SearchSortPanel";
import WineList from "../../Components/WineList/WineList";
import { useWebContext } from "../../Context/Context";

import * as S from "./Wines.styled";

const Wines: FC = () => {
  const WebCtx = useWebContext();
  const { winesType } = useParams<string>();

  useEffect(() => {
    WebCtx.fetchWinesByType(winesType);
  }, [winesType]);

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
