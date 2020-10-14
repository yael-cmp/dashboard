import React from "react";
import "../assets/styles/components/toggle.scss";
const Toggle = ({ left, funct }) => {
  return (
    <div
      style={
        left
          ? { position: "absolute", right: "0", top: "0", display: "flex" }
          : null
      }
    >
      <h4 className="color_d" style={{ margin: "0 10px" }}>
        Dark Mode
      </h4>
      <label className="switch">
        <input type="checkbox" onChange={funct}></input>
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Toggle;
