import React, { useEffect, useState } from "react";
import "../styleSheet/FilterHouse.css";
import { connect } from "react-redux";
import HouseList from "./HouseList";
const HouseFilter = ({ warehouses }) => {
  const [inputObject, setInputObject] = useState({});
  const [houses, setHouses] = useState(warehouses);
  const [cities, setCities] = useState([]);
  const [clusters, setClusters] = useState([]);
  const [spaceLimits, setSpaceLimits] = useState([]);

  // making arrays for filtering data
  useEffect(() => {
    warehouses.map((house) => {
      if (!cities.includes(house.city)) {
        setCities([...cities, house.city]);
      }
      if (!clusters.includes(house.cluster)) {
        setClusters([...clusters, house.cluster]);
      }
      if (!spaceLimits.includes(house.space_available)) {
        setSpaceLimits([...spaceLimits, house.space_available]);
      }
    });
  }, [cities, clusters, spaceLimits, warehouses]);

  // filter by city,cluster and space

  const handleFilter = (e) => {
    let newInputObject = {
      ...inputObject,
    };
    newInputObject[e.target.name] = e.target.value;
    setInputObject(newInputObject);

    const { city, cluster, spaceLimit } = inputObject;

    const newHouse = warehouses.filter((n) => {
      const isEmpty = Object.keys(inputObject).length === 0;
      if (isEmpty) {
        return n;
      }
      return (
        (!city || n.city === city) &&
        (!cluster || n.cluster === cluster) &&
        (!spaceLimit || n.space_available === parseFloat(spaceLimit))
      );
    });
    setHouses(newHouse);
  };

  return (
    <div className="filter_container">
      <div className="filterBox">
        <div className="filterBox_text">
          <p>Find Best Warehouse</p>
        </div>

        {/* filter by city */}
        <div>
          <label>City: </label>
          <select
            className="city filterBox_common"
            name="city"
            id=""
            onClick={(e) => handleFilter(e)}
          >
            {cities?.map((city) => (
              <option> {city} </option>
            ))}
          </select>
        </div>

        {/* filter by cluster */}
        <div>
          <label>cluster: </label>

          <select
            className="cluster filterBox_common"
            name="cluster"
            id=""
            onClick={(e) => handleFilter(e)}
          >
            {clusters?.map((cluster) => (
              <option> {cluster} </option>
            ))}
          </select>
        </div>

        {/* filter by space */}
        <div>
          <label>Space limit: </label>
          <select
            className="spaceLimit filterBox_common"
            name="spaceLimit"
            id=""
            onClick={(e) => handleFilter(e)}
          >
            {spaceLimits?.map((spaceLimit) => (
              <option> {spaceLimit} </option>
            ))}
          </select>
        </div>
      </div>

      {/* showing data  by filtering */}

      <div>
        <HouseList warehouses={houses} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    warehouses: state,
  };
};
export default connect(mapStateToProps)(HouseFilter);
