import styled from "styled-components";
const ProductSection = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductImgContainer = styled.div`
  width: 50%;
  height: 95%;
  padding: ${({ theme }) => theme.padding[1]};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    weight: 70%;
    height: 70%;
    object-fit: contain;
  }
`;
const ProductContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: nowrap;
  gap: 3rem;
  padding: ${({ theme }) => theme.padding[1]};
`;
const ProductName = styled.h1`
  font-size: ${({ theme }) => theme.fontsSize.doubleL};
  color: ${({ theme }) => theme.colors.black};
`;
const ProductDescription = styled.p`
  width: 70%;
  font-size: ${({ theme }) => theme.fontsSize.m};
  color: ${({ theme }) => theme.colors.gray};
`;
const ProductCost = styled.p`
  font-size: ${({ theme }) => theme.fontsSize.doubleL};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  span {
    font-size: ${({ theme }) => theme.fontsSize.m};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
const BtnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
`;
const BtnsFrame = styled.div`
  width: 10rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px ${({ theme }) => theme.colors.gray} solid;
`;
const BtnAdd = styled.button`
  width: 4rem;
  height: 3rem;
  background-color: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontsSize.l};
  color: ${({ theme }) => theme.colors.black};
`;
const BtnRemove = styled(BtnAdd)``;
const Counter = styled.span`
  font-size: ${({ theme }) => theme.fontsSize.l};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
`;
const AddToCardBtn = styled.button`
  width: 15rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  font-size: ${({ theme }) => theme.fontsSize.m};
  font-weight: 400;
  letter-spacing: 0.1rem;
  border: none;
`;
const ProductDetailsSection = styled.section`
  width: 100%;
  height: auto;
`;
const LinesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.black};
`;
const Line = styled.hr`
  width: 10%;
  color: ${({ theme }) => theme.colors.gray};
`;
const DetailsList = styled.ul`
  width: 100%;
  height: 40vh;
  margin-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style-type: none;
  li {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    h2 {
      font-size: ${({ theme }) => theme.fontsSize.m};
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;

export {
  ProductSection,
  ProductDetailsSection,
  ProductImgContainer,
  ProductContainer,
  ProductName,
  ProductDescription,
  ProductCost,
  BtnsContainer,
  BtnsFrame,
  BtnAdd,
  BtnRemove,
  Counter,
  AddToCardBtn,
  Line,
  LinesContainer,
  DetailsList,
};
