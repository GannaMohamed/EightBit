import React from "react";
import styled from "styled-components";
import platform from "../../Assets/Web/platform.svg";
import screen from "../../Assets/Web/screen.svg";
import keyboard from "../../Assets/Web/keyboard.svg";
import shadow from "../../Assets/Web/shadow.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${
    "" /* justify-content: center;
  ${
    "" /* position: relative;
  right: 5vw;
  bottom: 5vw; */
  }
`;
const LaptopContainer = styled.div`
  position: relative;
  bottom: 1vh;
  ${"" /* top: 3vh; */}
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
  z-index: 1;
  position: relative;
  bottom: 0.2vw;
`;
const Shadow = styled.img`
  width: 23vw;
  position: absolute;
  top: 90%;
  left: -5.5vw;
  fill: radial-gradient(
    712.05% 120.39% at -14.32% 86.21%,
    #000 0%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: blur(8px);
  transform: rotate(15deg);
`;
const Platform = styled.img`
  ${"" /* width: calc(100% - 5vw); */}
  width: calc(100% - 5vw);
  position: relative;
  bottom: 5vh;
  z-index: -1;
`;

export default function WebTemplate({ img, className}) {
  return (
    <Container className={`${className}`}>
      <LaptopContainer className="LaptopContainer position-relative">
        <Example className="example" src={img} alt="Web Example" />
        <Laptop src={screen} alt="img" />
        <Keybaord className="Keyboard" src={keyboard} alt="Leybaord" />{" "}
        <Shadow src={shadow} alt="img" />
      </LaptopContainer>
      <Platform className="Platform" src={platform} alt="img" />
    </Container>
  );
}

{
  /* <Laptop /> */
}
{
  /* <img className={className} src={Web} alt="Web Portfolio" /> */
}
{
  /* <img className="WebExampleImg" src={img} alt="Web Example" /> */
}
