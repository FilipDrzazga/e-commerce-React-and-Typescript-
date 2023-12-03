import React from "react";
import WelcomeScreen from "./Pages/WelcomeScreen/WelcomeScreen";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      {/* <WelcomeScreen/> */}
      <Routes>
        <Route index path="/home" element={<HomeScreen />} />
        <Route path="home/:winesType" element={<Products />} />
        <Route path="home/:winesType/:name" element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
};

export default App;
