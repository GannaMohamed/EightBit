import React from "react";
import { ResourceLoader } from "./Models/ResourceLoader";
import "./Test.css";
import MobTemplate from "./Components/3_Portfolio/MobTemplate";
import WebTemplate from "./Components/3_Portfolio/WebTemplate";
import { webexample, mobexample } from "./Utils/assets";
import { ArrayResourceLoader } from "./Models/ArrayResourceLoader";
import { NavLink } from "react-router-dom";

export default function Test() {
  const handleWheelScroll = (e) => {
    e.currentTarget.scrollLeft += e.deltaY; // Use vertical scroll input to scroll horizontally
  };
  return (
    <ArrayResourceLoader
      resourceUrl={"/project"}
      resourceName={"project"}
      ItemComponent={TestTemplate}
      className="horizontal-scroll-wrapper d-flex flex-nowrap"
      style={{ gap: "20px" }}
      onWheel={handleWheelScroll}
    ></ArrayResourceLoader>
  );
}

export function TestTemplate({ project, displayedType }) {
  const {
    name,
    desription,
    type,
    keyFeatures,
    technologies,
    platform,
    status,
    isShown,
    projectMedia,
  } = project || {};
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="col centered">
          <h5>{name}</h5>
          <div>{desription}</div>
          <NavLink to="/portfolio" className="Button">
            See More Projects
          </NavLink>
        </div>

        {platform === "web" && (
          <WebTemplate
            img={webexample}
            projectMedia={projectMedia}
            className="WebTemplate"
          />
        )}
        {platform === "mobile" && (
          <MobTemplate
            img={mobexample}
            projectMedia={projectMedia}
            className="MobileContainer"
          />
        )}
      </div>
    </div>
  );
}

{
  /* <ResourceLoader
        resourceUrl={"/project/32485017-38b9-4133-a207-3a88604a7400"}
        resourceName={"project"}
      >
        <TestTemplate displayedType={"web"} />
        <TestTemplate displayedType={"web"} />
        <TestTemplate displayedType={"web"} />
        <TestTemplate displayedType={"web"} />
        <TestTemplate displayedType={"web"} />
        <TestTemplate displayedType={"web"} />
        <TestTemplate displayedType={"web"} />
        <TestTemplate displayedType={"web"} />
      </ResourceLoader> */
}
