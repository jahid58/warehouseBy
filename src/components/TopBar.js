import React, { useState } from "react";
import "../styleSheet/TopBar.css";
import { HiOutlineSearch } from "react-icons/hi";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
const TopBar = ({ houseNames }) => {
  const [searchInput, setSearchInput] = useState();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInput) {
      navigate(`/details/${searchInput}`);
    }
  };

  return (
    <div className="topBar">
      <div>
        <p className="topBar_heading" onClick={() => navigate("/home")}>
          WareHouseBy
        </p>
      </div>
      <div className="topBar_searchBox">
        <input
          type="text"
          className="topBar_searchInput"
          placeholder="Search  Warehouse"
          onMouseMove={(e) => setSearchInput(e.target.value)}
        />
        <div className="topBar_searchIcon" onMouseDown={() => handleSearch()}>
          <HiOutlineSearch />
        </div>
      </div>
      <div className="">
        <p className="topBar_login">Log in</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    houseNames: state.map((house) => house.name),
  };
};
export default connect(mapStateToProps)(TopBar);
