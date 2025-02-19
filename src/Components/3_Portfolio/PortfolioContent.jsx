import React, { useEffect } from "react";
import styled from "styled-components";
import MobTemplate from "./MobTemplate";
import WebTemplate from "./WebTemplate";
import { webexample, mobexample } from "../../Utils/assets";
import { NavLink } from "react-router-dom";

const ContentTitle = styled.h5`
  ${"" /* font-size: 2.7vw; */}
  letter-spacing: clamp(0.1rem, 0.15vw, 0.4rem);
  margin: unset;
  ${"" /* line-height: 4.117vw; */}
  background: var(
    --linear2,
    linear-gradient(120deg, #0140a0 31.58%, #00173a 121.41%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Content = styled.div`
  width: 30%; /* Changes in mediaquery */
  display: grid;
  gap: 1vh;
`;

const ContentP = styled.p`
  color: var(--oxfordBlue);
  letter-spacing: clamp(0.1rem, 0.1vw, 0.2rem);
  margin: unset;
  ${
    "" /* font-size: 1.5vw;
  line-height: 2.5vw; */
  }
`;

export default function PortfolioContent({ project, displayedType }) {
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

  // const shouldDisplayProject = displayedType === platform;

  return (
    // shouldDisplayProject &&
    <div className="PortfolioContentContainer">
      <Content className="PortfolioContent">
        <ContentTitle className="bold">{name}</ContentTitle>
        <div className="badge-container">
          {technologies?.split(",").map((badge) => (
            <span className="badge">{badge}</span>
          ))}
          {/* ))} */}
        </div>
        <ContentP className="ContentP medium">{desription}</ContentP>
        <div>
          <NavLink to="/portfolio">
            <button className="SeeMore semibold">
              <h6 className="SeeMoreH6">See More</h6>
            </button>
          </NavLink>
        </div>
      </Content>
      <div className="d-flex centered">
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
