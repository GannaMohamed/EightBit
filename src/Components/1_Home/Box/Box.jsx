import React from "react";
import "./Box.css";
import styled from "styled-components";

const EllipseLeft = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  width: 10px;
  height: 10px;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-50%, -50%);
`;
const Ellipse2Left = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  height: 10px;
  width: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(-50%, 50%);
`;
const EllipseRight = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  width: 10px;
  height: 10px;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(0%, -50%);
`;
const Ellipse2Right = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  height: 10px;
  width: 10px;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(-17%, 50%);
`;

export default function Box({ dashvector, position, children }) {
  return (
    <div className="box">
      <div
        className={`vectorContainer position-relative ${
          position === "left" ? "left" : "right"
        }`}
      >
        <img alt="Vector" src={dashvector} />
        {position === "left" ? (
          <>
            <EllipseLeft />
            <Ellipse2Left />
          </>
        ) : null}
        {position === "right" ? (
          <>
            <EllipseRight />
            <Ellipse2Right />
          </>
        ) : null}
      </div>
      <div className={`rectangle`}>{children}</div>
    </div>
  );
}
