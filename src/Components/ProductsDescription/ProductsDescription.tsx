import { type FC } from "react";
import { useParams } from "react-router-dom";
import * as S from "./ProductsDescription.styled";

const ProductsDescription: FC = () => {
  const { winesType } = useParams<string>();
  console.log(winesType);

  return (
    <S.Section>
      <S.Title $afterTxtContent={winesType}>{winesType}</S.Title>
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

export default ProductsDescription;
