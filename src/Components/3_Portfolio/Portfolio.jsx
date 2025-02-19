import React, { useEffect, useRef } from "react";
// import PortfolioContent from "./PortfolioContent";

import styled from "styled-components";
import WebVector from "../../Assets/WebVector.svg";
import MobVector from "../../Assets/MobVector.svg";
import "./Portfolio.css";
import { motion } from "motion/react";

// import { ResourceLoader } from "../../Models/ResourceLoader";
import { ArrayResourceLoader } from "../../Models/ArrayResourceLoader";
// import HorizontalScroll from "../general/HorizontalScroll";
import { TestTemplate } from "../../Test";
import { ResourceLoader } from "../../Models/ResourceLoader";
import PortfolioContent from "./PortfolioContent";
import AOS from "aos";

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

export default function Portfolio({
  className,
  projectId,
  type,
  CubeComponent,
}) {
  const ref = useRef(null);

  const handleWheelScroll = (e) => {
    e.currentTarget.scrollLeft += e.deltaY; // Use vertical scroll input to scroll horizontally
  };

  useEffect(() => {
    AOS.init();
  });

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
            {/* <motion.div
              ref={ref}
              initial={{ x: -100, y: -500 }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ duration: 1 }}
            > */}
            <CubeComponent
              Width="10vw"
              className={`CubePortfolio`}
              moveElement={0}
            />
            {/* </motion.div> */}
          </div>
        </div>
        {/* Content Section */}
        {/* <HorizontalScroll> */}
        {/* <ArrayResourceLoader
          resourceUrl={"/project"}
          resourceName={"project"}
          ItemComponent={TestTemplate}
          className="horizontal-scroll-wrapper d-flex  flex-nowrap"
          style={{ gap: "20px" }}
          onWheel={handleWheelScroll}
        ></ArrayResourceLoader> */}
        <ResourceLoader
          resourceUrl={`/project/${projectId}`}
          resourceName={"project"}
        >
          <PortfolioContent />
        </ResourceLoader>
        {/* <ResourceLoader
          resourceUrl={"/project/1dd8e6bc-116d-4c7f-b227-acfb1b90bd85"}
          resourceName={"project"}
        >
          <TestTemplate />
        </ResourceLoader> */}
        {/* </HorizontalScroll> */}
      </div>
    </div>
  );
}
