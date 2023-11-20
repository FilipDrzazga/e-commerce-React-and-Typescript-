import { type FC } from "react";
import * as S from "./WineListDescription.styled";

const WineListDescription: FC = () => {
  return (
    <S.Section>
      <S.Title>rose wine</S.Title>
      <S.ParagraphContainer>
        <S.Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </S.Paragraph>
      </S.ParagraphContainer>
    </S.Section>
  );
};

export default WineListDescription;
