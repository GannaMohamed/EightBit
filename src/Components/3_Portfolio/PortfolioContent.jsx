import React from "react";
import styled from "styled-components";
import MobTemplate from "./MobTemplate";
import WebTemplate from "./WebTemplate";
import { webexample, mobexample } from "../../Utils/assets";

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

export default function PortfolioContent({ type }) {
  return (
    <div className="PortfolioContentContainer">
      <Content className="PortfolioContent">
        <ContentTitle className="bold">UI / UX for 8 A Web </ContentTitle>
        <ContentP className="ContentP medium">
          UI and UX design for a website inspired by 8-bit style , combining
          retro graphics and modern interactivity to deliver a unique and
          seamless visual experience to users.
        </ContentP>
        <div>
          <button className="SeeMore semibold">
            <h6 className="SeeMoreH6">See More</h6>
          </button>
        </div>
      </Content>
      <div className="d-flex centered">
        {type === "web" && (
          <WebTemplate img={webexample} className="WebTemplate" />
        )}
        {type === "mobile" && (
          <MobTemplate img={mobexample} className="MobileContainer" />
        )}
      </div>
    </div>
  );
}
