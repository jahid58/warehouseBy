import React from "react";
import HouseFilter from "../components/HouseFilter";
import HouseList from "../components/HouseList";
import TopBar from "../components/TopBar";

const HomePage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <HouseFilter />
    </div>
  );
};

export default HomePage;
