import React from "react";
import "./Box.css";
import LeftLine from "../../../Assets/LeftLine.svg";
import RightLine from "../../../Assets/RightLine.svg";

export default function Box({ position, children, className }) {
  return (
    <div className={`box ${className}`}>
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
      <div
        className={`rectangle ${position === "left" ? "LeftBox" : "RightBox"}`}
      >
        {children}
      </div>
    </div>
  );
}
