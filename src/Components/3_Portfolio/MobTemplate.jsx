import React from "react";
import mobile from "../../Assets/mobile.svg";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 20vw;
  height: 40vw;
  left: 15vw;
  bottom: 8vw;
`;

// const Template = styled.img``;

const Example = styled.img`
  padding: 1.5vw;
  border-radius: 4vw;
`;

export default function MobTemplate({ className, img }) {
  return (
    <Container className="TempContainer">
      <Example src={img} className="example" alt="Mobile App" />
      <img src={mobile} alt="Mobile Portfolio" />
    </Container>
  );
}
