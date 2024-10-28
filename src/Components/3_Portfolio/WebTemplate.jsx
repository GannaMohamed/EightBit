import React from "react";
import styled from "styled-components";
import platform from "../../Assets/Web/platform.svg";
import screen from "../../Assets/Web/screen.svg";
import keyboard from "../../Assets/Web/keyboard.svg";
import shadow from "../../Assets/Web/shadow.svg";

const Container = styled.div`
  width: 48vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${"" /* justify-content: center; */}
  position: relative;
  right: 5vw;
`;
const LaptopContainer = styled.div`
  position: relative;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${"" /* overflow: hidden; */}
  transform: rotate(-15deg);
`;
const Example = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1vw;
  padding: 1vw;
`;
const Laptop = styled.img`
  width: inherit;
  height: inherit;
`;
const Keybaord = styled.img`
  width: 35vw;
  z-index: 1;
  position: relative;
  bottom: 0.2vw;
`;
const Shadow = styled.img`
  width: 38.426vw;
  position: absolute;
  ${"" /* left: 0vw; */}
  top: 90%;
  fill: radial-gradient(
    712.05% 120.39% at -14.32% 86.21%,
    #000 0%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: blur(8px);
  transform: rotate(15deg);
`;
const Platform = styled.img`
  width: inherit;
  position: relative;
  bottom: 2vw;
  z-index: -1;
`;

export default function WebTemplate({ img, className }) {
  return (
    <div>
      <Container>
        <LaptopContainer className="Lap position-relative">
          <Example className="example" src={img} alt="Web Example" />
          <Laptop src={screen} alt="img" />
          <Keybaord src={keyboard} alt="Leybaord" />{" "}
          <Shadow src={shadow} alt="img" />
        </LaptopContainer>
        <Platform src={platform} alt="img" />
      </Container>
      {/* <Laptop /> */}
      {/* <img className={className} src={Web} alt="Web Portfolio" /> */}
      {/* <img className="WebExampleImg" src={img} alt="Web Example" /> */}
    </div>
  );
}
