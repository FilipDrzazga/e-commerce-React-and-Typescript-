import { FC } from "react";
import { useWebContext } from "../../Context/Context";
import * as S from "../ShoppingCart/ShoppingCart.styled";

const ShoppingCart: FC = () => {
  const itemsColumn = ["Items", "Size", "Quantity", "Price"];
  const summaryTitle = ["Subtotal", "Shipping", "Tax"];
  const WebCtx = useWebContext();
  return (
    <S.ShoppingCard>
      <section>
        <button onClick={() => WebCtx.displayShoppingCart(false)}>BACK TO STORE</button>
        <header>
          <h1>Shopping cart</h1>
          <span>3 ITEMS</span>
        </header>
        <ul>
          <li>
            {itemsColumn.map((column) => (
              <span>{column}</span>
            ))}
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <p>Product name</p>
              <p>Type of wine</p>
            </div>
            <div>
              <p>750ml</p>
            </div>
            <div>
              <button>plus</button>
              <span>1</span>
              <button>minus</button>
            </div>
            <div>
              <span>Price</span>
            </div>
            <div>
              <button>Delete</button>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <button>Close</button>
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
      </section>
    </S.ShoppingCard>
  );
};

export default ShoppingCart;
