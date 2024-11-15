import React from "react";
import "./Path.css";
export default function Path() {
  return (
    <div className="path centered">
      <svg
        width="80vw"
        height="80vw"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="cubePath"
          fill="none"
          stroke="black"
          d="M 50 0180 L 0 250 L 50 500"
        />
      </svg>
    </div>
  );
}
