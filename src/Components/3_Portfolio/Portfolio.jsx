import React from "react";
import PortfolioContent from "./PortfolioContent";

import styled from "styled-components";
import WebVector from "../../Assets/WebVector.svg";
import MobVector from "../../Assets/MobVector.svg";
import "./Portfolio.css";
import { ResourceLoader } from "../../Models/ResourceLoader";
import { ArrayResourceLoader } from "../../Models/ArrayResourceLoader";
import HorizontalScroll from "../general/HorizontalScroll";
import { TestTemplate } from "../../Test";

const Title = styled.h2`
  ${"" /* font-size: 6vw; */}
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

export default function Portfolio({ className, type, CubeComponent }) {
  const handleWheelScroll = (e) => {
    e.currentTarget.scrollLeft += e.deltaY; // Use vertical scroll input to scroll horizontally
  };
  return (
    <div className={`PortfolioPage col ${className}`}>
      <div className={`PortfolioPageContainer col`}>
        {/* Title Section */}
        <div className="d-flex align-items-start">
          <Title className="medium">Portfolio</Title>
          <div className="PortfolioCubeContainer d-flex align-items-start">
            {/* <img className="WebVector" src={WebVector} alt="Dashed Lines" /> */}
            <img
              className="WebVector "
              src={type === "web" ? WebVector : MobVector}
              alt="Dashed Lines"
            />
            {/* <Cube moveElement={4} Width="" /> */}
            <CubeComponent
              Width="10vw"
              className={`CubePortfolio`}
              moveElement={0}
            />
          </div>
        </div>
        {/* Content Section */}
        {/* <HorizontalScroll> */}
        <ArrayResourceLoader
          resourceUrl={"/project"}
          resourceName={"project"}
          ItemComponent={TestTemplate}
          className="horizontal-scroll-wrapper d-flex flex-nowrap"
          style={{ gap: "20px" }}
          onWheel={handleWheelScroll}
        ></ArrayResourceLoader>
        {/* </HorizontalScroll> */}
      </div>
    </div>
  );
}
