import React from "react";
import "./Box.css";
import LeftLine from "../../../Assets/LeftLine.svg";
import RightLine from "../../../Assets/RightLine.svg";

export default function Box({ position, children }) {
  return (
    <div className="box">
      <div
        className={`vectorContainer position-relative ${
          position === "left" ? "left" : "right"
        }`}
      >
        {/* Simplified the conditional logic here */}
        <img
          className="vector"
          alt="Vector"
          src={position === "left" ? LeftLine : RightLine}
        />
      </div>
      <div className={`rectangle`}>{children}</div>
    </div>
  );
}
