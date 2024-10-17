import React from "react";
import Cube from "../Cube/Cube";
import PortfolioContent from "./PortfolioContent";

import styled from "styled-components";
import WebVector from "../../Assets/WebVector.svg";
import MobVector from "../../Assets/MobVector.svg";
import "./Portfolio.css";

const Title = styled.h2`
  font-size: 6vw;
  letter-spacing: 1.481vw;
  ${
    "" /* position: relative;
  bottom: 5vw; */
  }
  background: var(--linear2, linear-gradient(120deg, #0140A0 31.58%, #00173A 121.41%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function Portfolio({ className }) {
  return (
    <div className={`col centered ${className} PortfolioContainer`}>
      <div className={`col justify-content-between`}>
        {/* Title Section */}
        <div className="d-flex align-items-start/">
          <Title className="medium">Portfolio</Title>
          <div className="d-flex align-items-start PortfolioCubeContainer">
            {/* <img className="WebVector" src={WebVector} alt="Dashed Lines" /> */}
            <img className="WebVector" src={MobVector} alt="Dashed Lines" />
            <Cube moveElement={4} Width="13.693vw" />
          </div>
        </div>
        {/* Content Section */}
        <PortfolioContent type="mobile" />
      </div>
    </div>
  );
}
