import React from "react";
import Mobile from "../../Assets/Mobile.svg";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 20vw;
  height: 40vw;
  left: 15vw;
  bottom: 8vw;
`;

const Template = styled.img``;

const Example = styled.img`
  padding: 1.5vw;
  border-radius: 4vw;
`;

export default function MobTemplate({ className, img }) {
  return (
    <Container className="TempContainer">
      <Example src={img} className="example" alt="Mobile App" />
      <Template src={Mobile} />
    </Container>
  );
}
