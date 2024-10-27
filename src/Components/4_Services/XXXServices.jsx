import React from "react";
import styled from "styled-components";
import List from "../general/List";
import { servicesdata } from "../../data";
import ServicesInfo from "./ServicesInfo";

const Heading = styled.h1`
  font-size: 7.407vw;
  letter-spacing: 1.481vw;
  background: linear-gradient(180deg, #052453 20.5%, #fff 188%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function Services() {
  return (
    <div className="Services d-flex col centered">
      <Heading>Services</Heading>
      <List
        items={servicesdata}
        srcName={"service"}
        className={"services"}
        ItemComponent={(props) => (
          <ServicesInfo {...props} className="ServiceItem" />
        )}
      />
    </div>
  );
}
