import { FC } from "react";
import { useLocation } from "react-router-dom";
import { splitCountryAndCityRegex } from "../../helpers";

type LocationState = {
  state: {
    winery: number;
    wine: string;
    wineType: string;
    rating: {
      average: string;
      reviews: string;
    };
    location: string;
    image: string;
    id: number;
  };
};

const Product: FC = () => {
  const { state } = useLocation() as LocationState;
  console.log(state);
  return (
    <section>
      <section>
        <div>
          <img src={state.image} alt="bootle of wine" />
        </div>
        <div>
          <h1>{state.wine}</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Quis et convallis euismod eu morbi arcu maecenas. Non dictumst.</p>
          <p>
            £10.20 <span>750ml</span>
          </p>
          <div>
            <div>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </section>
      <section>
        <hr></hr>
        <h2>DETAILS</h2>
        <hr></hr>
        <ul>
          <li>
            <header>
              <h2>WINE TYPE</h2>
            </header>
            <p>{state.wineType}</p>
          </li>
          <li>
            <header>
              <h2>PRODUCER</h2>
            </header>
            <p>{state.winery}</p>
          </li>
          <li>
            <header>
              <h2>VINTAGE</h2>
            </header>
            <p>1997</p>
          </li>
          <li>
            <header>
              <h2>COUNTRY</h2>
            </header>
            <p>{splitCountryAndCityRegex(state.location)?.country}</p>
          </li>
          <li>
            <header>
              <h2>LOCATION</h2>
            </header>
            <p>{splitCountryAndCityRegex(state.location)?.city}</p>
          </li>
          <li>
            <header>
              <h2>GRAPE</h2>
            </header>
            <p>100% Sangiovese</p>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Product;
