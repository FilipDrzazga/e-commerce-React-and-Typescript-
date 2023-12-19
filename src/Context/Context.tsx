import { type FC, type ReactElement, useState, createContext, useContext } from "react";
import { splitIntoChunks, filterPngImages } from "../helpers";

interface FetchedDataShape {
  winery: string;
  wine: string;
  rating: {
    average: string;
    reviews: string;
  };
  locations: string;
  image: string;
  id: number;
}

interface Product extends FetchedDataShape {
  quantity: number;
  capacity: string;
  price: number;
}

type WebContextValueType = {
  data: Array<FetchedDataShape[]>;
  isShoppingCartVisible: boolean;
  fetchWinesByType: (winesType?: string) => Promise<unknown>;
  displayDataPage: () => void;
  displayShoppingCart: (isVisible: boolean) => void;
  addToShoppingCart: (product: Partial<Product>) => void;
};

type WebContextProviderPropsType = {
  children: ReactElement;
};

const WebCtx = createContext<WebContextValueType | null>(null);

export const useWebContext = () => {
  const WebContext = useContext(WebCtx);
  if (WebContext === null) {
    throw new Error("Context issue");
  }
  return WebContext;
};

const WebContextProvider: FC<WebContextProviderPropsType> = ({ children }) => {
  const [fetchData, setFetchData] = useState<FetchedDataShape[][]>([]);
  const [data, setData] = useState<FetchedDataShape[][]>([]);
  const [page, setPage] = useState(0);
  const [type, setType] = useState<string | undefined>("");
  const [isShoppingCartVisible, setIsShoppingCartVisible] = useState<boolean>(false);
  const [shoppingCartItem, setShoppingCartItem] = useState<Partial<Product>[]>([]);

  const ctx: WebContextValueType = {
    data: data,
    isShoppingCartVisible: isShoppingCartVisible,
    async fetchWinesByType(winesType) {
      if (winesType !== type) {
        setData([]);
        try {
          const response = await fetch(`https://api.sampleapis.com/wines/${winesType}`);
          if (!response.ok) {
            throw new Error("Fetch wines data went wrong");
          }
          const data: FetchedDataShape[] = await response.json();
          const getPngWine = filterPngImages<FetchedDataShape>(data);
          const winesChunks = splitIntoChunks<FetchedDataShape>(getPngWine, 20);
          setFetchData(winesChunks);
          setData([winesChunks[page]]);
          setType(winesType);
        } catch (error) {
          console.log(error);
        }
      }
    },
    displayDataPage() {
      setData((prevState) => [...prevState, fetchData[page]]);
      setPage((prevState) => prevState + 1);
    },
    displayShoppingCart(isVisible) {
      setIsShoppingCartVisible(isVisible);
    },
    addToShoppingCart(product) {
      setShoppingCartItem((prevState) => [...prevState, product]);
      console.log(shoppingCartItem);
    },
  };

  return <WebCtx.Provider value={ctx}>{children}</WebCtx.Provider>;
};

export default WebContextProvider;
