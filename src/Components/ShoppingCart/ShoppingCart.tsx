import { FC } from "react";
import { useWebContext } from "../../Context/Context";
import { AddCircleBtnIcon, RemoveCircleBtnIcon, ArrowIcon, RemoveBtnIcon } from "../../assets/icons";
import * as S from "../ShoppingCart/ShoppingCart.styled";

const ShoppingCart: FC = () => {
  const itemsColumn = ["Items", "Size", "Quantity", "Price"];
  const summaryTitle = ["Subtotal", "Shipping", "Tax"];
  const WebCtx = useWebContext();
  console.log(WebCtx.shoppingCartItem);
  return (
    <S.ShoppingCard>
      <S.Cart>
        <S.CartBtn onClick={() => WebCtx.displayShoppingCart(false)}>
          <ArrowIcon color="#AEB7C8" />
          BACK TO STORE
        </S.CartBtn>
        <S.CartHeader>
          <h1>Shopping cart</h1>
          <span>3 ITEMS</span>
        </S.CartHeader>
        <S.CartListHeader>
          {itemsColumn.map((column) => (
            <li key={column}>{column}</li>
          ))}
        </S.CartListHeader>
        <S.CartList>
          {WebCtx.shoppingCartItem.map((item, id) => (
            <S.Item key={item.wine}>
              <S.ItemImg>
                <img src={item.image} alt="bootle of wine" />
              </S.ItemImg>
              <S.ItemName>
                <p>{item.wine}</p>
                <p>{item.wineType}</p>
              </S.ItemName>
              <S.ItemCapacity>
                <p>{item.capacity}</p>
              </S.ItemCapacity>
              <S.ItemBtns>
                <button>
                  <RemoveCircleBtnIcon></RemoveCircleBtnIcon>
                </button>
                <span>1</span>
                <button>
                  <AddCircleBtnIcon></AddCircleBtnIcon>
                </button>
              </S.ItemBtns>
              <S.ItemPrice>
                <span>£{item.price}</span>
              </S.ItemPrice>
              <S.ItemRemove>
                <button>
                  <RemoveBtnIcon></RemoveBtnIcon>
                </button>
              </S.ItemRemove>
            </S.Item>
          ))}
        </S.CartList>
      </S.Cart>
      <S.CartSummary>
        <button onClick={() => WebCtx.displayShoppingCart(false)}>Close</button>
        <header>
          <h2>Summary</h2>
        </header>
        <ul>
          {summaryTitle.map((title) => (
            <li>{title}</li>
          ))}
        </ul>
        <div>
          <span>Total</span>
        </div>
      </S.CartSummary>
    </S.ShoppingCard>
  );
};

export default ShoppingCart;
