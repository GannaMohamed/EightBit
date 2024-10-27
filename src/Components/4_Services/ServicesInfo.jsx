import React from "react";
import SplitScreen from "../general/SplitScreen";
import arrow from "../../Assets/arrow.svg";
import "./Services.css";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 7.407vw;
  letter-spacing: 1.481vw;
  background: linear-gradient(180deg, #052453 20.5%, #fff 188%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function ServicesInfo({ service }) {
  return (
    <div
      id={service.index === "01" ? "services" : undefined}
      className="ServicesInfo d-flex col centered"
    >
      {service.index === "01" && (
        <div className="w-100">
          <Heading>Services</Heading>
        </div>
      )}

      <SplitScreen firstWidth={1} secondWidth={3}>
        <div className="position-relative" style={{ height: "fit-content" }}>
          <div className="NumberSquare position-absolute"></div>
          <div className="Number position-absolute" style={{ left: "3.2vw" }}>
            {service.index}
          </div>
        </div>
        <div>
          <h2 className="Head">{service.head}</h2>
          <div className="Body">{service.body}</div>
          <div className="ReadMore d-flex justify-content-between">
            <div className="ReadMoreText">Read More</div>
            <img className="Arrow" src={arrow} alt="Read More Arrow" />
          </div>
        </div>
      </SplitScreen>
    </div>
  );
}
