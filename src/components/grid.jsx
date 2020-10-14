import React from "react";
import "../assets/styles/components/grid.scss";

const Grid = (props) => {
  return <div className="grid">{props.children}</div>;
};
export default Grid;
