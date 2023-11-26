import { type FC, type ReactElement, useState, createContext } from "react";

type FetchedDataShape = {
  winery: string;
  wine: string;
  rating: {
    average: string;
    reviews: string;
  };
  locations: string;
  image: string;
  id: number;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  id: number;
};

type WebContextValueType = {
  fetchedData: FetchedDataShape[] | null;
  fetchWinesByType: (winesType: string) => Promise<unknown>;
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
};

type WebContextProviderPropsType = {
  children: ReactElement;
};

const WebCtx = createContext<WebContextValueType | null>(null);

const WebContextProvider: FC<WebContextProviderPropsType> = ({ children }) => {
  const [fetchData, setFetchData] = useState<FetchedDataShape[] | null>(null);

  const ctx: WebContextValueType = {
    fetchedData: fetchData,
    async fetchWinesByType(winesType) {
      try {
        const response = await fetch(`https://api.sampleapis.com/wines/${winesType}`);
        if (!response.ok) {
          throw new Error("Fetch wines data went wrong");
        }
        const data = await response.json();
        console.log(data);
        return setFetchData(data);
      } catch (error) {
        console.log(error);
      }
    },
    addProduct() {},
    removeProduct() {},
  };

  return <WebCtx.Provider value={ctx}>{children}</WebCtx.Provider>;
};

export default WebContextProvider;
