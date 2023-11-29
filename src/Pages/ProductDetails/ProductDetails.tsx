import { FC } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";

const ProductDetails: FC = () => {
  const { name } = useParams<string>();
  return (
    <>
      <Navigation></Navigation>
      <p>{name}</p>
    </>
  );
};

export default ProductDetails;
