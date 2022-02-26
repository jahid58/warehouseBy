import React from "react";
import { connect } from "react-redux";
import WareHouse from "./WareHouse";

const HouseList = ({ warehouses }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#5C5955",
      }}
    >
      {warehouses.length &&
        warehouses.map((house) => <WareHouse key={house.id} house={house} />)}
      {!warehouses.length && <h3> No Warehouse There!</h3>}
    </div>
  );
};
export default HouseList;
// const mapStateToProps = (state) => {
//   return {
//     wareHouses: state,
//   };
// };
// export default connect(mapStateToProps)(HouseList);
