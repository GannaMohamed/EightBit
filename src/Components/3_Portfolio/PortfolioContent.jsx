import React from "react";
import styled from "styled-components";
import MobTemplate from "./MobTemplate";
import WebTemplate, { Laptop } from "./WebTemplate";
import { webexample, mobexample } from "../../Utils/assets";

const ContentTitle = styled.h3`
  font-size: 2.7vw;
  line-height: 4.117vw;
  background: var(
    --linear2,
    linear-gradient(120deg, #0140a0 31.58%, #00173a 121.41%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Content = styled.div`
  width: 30%;
`;

const ContentP = styled.div`
  font-size: 1.5vw;
  line-height: 2.5vw;
`;

export default function PortfolioContent({ type }) {
  return (
    <div className="d-flex ">
      <Content>
        <ContentTitle className="bold">UI / UX for 8 A Web </ContentTitle>
        <ContentP cl assName="medium">
          UI and UX design for a website inspired by 8-bit style , combining
          retro graphics and modern interactivity to deliver a unique and
          seamless visual experience to users.
        </ContentP>
        <button className="SeeMore semibold">See More</button>
      </Content>
      <div className="d-flex">
        <WebTemplate img={webexample} className="webTemplate" />
        {/* <MobTemplate img={mobexample} /> */}
      </div>
    </div>
  );
}
