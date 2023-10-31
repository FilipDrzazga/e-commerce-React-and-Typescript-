import React, { type ReactElement, createContext } from "react";

type Product = {
  name: string;
  price: number;
  quantity: number;
  id: number;
};

type WebContextValueType = {
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
};

type WebContextProviderPropsType = {
  children: ReactElement;
};

const WebCtx = createContext<WebContextValueType | null>(null);

const WebContextProvider: React.FC<WebContextProviderPropsType> = ({ children }) => {
  const ctx: WebContextValueType = {
    addProduct() {},
    removeProduct() {},
  };
  return <WebCtx.Provider value={ctx}>{children}</WebCtx.Provider>;
};

export default WebContextProvider;
