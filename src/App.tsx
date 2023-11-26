import React from "react";
import WelcomeScreen from "./Pages/WelcomeScreen/WelcomeScreen";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import Wines from "./Pages/Wines/Wines";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      {/* <WelcomeScreen/> */}
      <Routes>
        <Route index path="/home" element={<HomeScreen />} />
        <Route path="wines/:winesType" element={<Wines />} />
      </Routes>
    </>
  );
};

export default App;
