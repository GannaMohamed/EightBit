import React from "react";
import styled from "styled-components";

import Web from "../../Assets/Web.svg";

import left from "../../Assets/Web/left.svg";
import right from "../../Assets/Web/right.svg";
import material from "../../Assets/Web/material.svg";
import shadow from "../../Assets/Web/shadow.svg";
import surface from "../../Assets/Web/path162.svg";
import belowSurface from "../../Assets/Web/path180.svg";
import neck from "../../Assets/Web/path200.svg";

const LaptopContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center; /* Centers the content */
  padding: 20px; /* Optional padding */
`;

const Table = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
`;
const Left = styled.img`
  ${
    "" /* width: 100%;
  height: 100%; */
  }
`;
const Right = styled.img`
  ${
    "" /* width: 100%;
  height: 100%; */
  }
`;
const Top = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  clip-path: polygon(0% 25%, 100% 0%, 100% 100%, 0% 100%);
  background: linear-gradient(355deg, #0140a0 0.71%, #052453 100.86%),
    radial-gradient(
      115.03% 114.89% at 53.81% 100%,
      #fff 57.26%,
      rgba(255, 255, 255, 0) 100%
    );
  background-size: 5% 55%;
`;

export default function WebTemplate({ img, className }) {
  return (
    <div>
      {/* <Laptop /> */}
      {/* <img className={className} src={Web} alt="Web Portfolio" /> */}
      {/* <img className="WebExampleImg" src={img} alt="Web Example" /> */}
    </div>
  );
}

const Lap = styled.div``;
const Screen = styled.div`
  position: relative;
  border: 1px red solid;
`;
const Material = styled.img``;
const Neck = styled.img`
  left: 30%;
  top: 20%;
`;

const Shadow = styled.img``;

const Keyboard = styled.div`
  position: relative;
  top: 10vw;
`;
const Surface = styled.img``;
const BelowSurface = styled.img`
  top: 10%;
  left: 4%;
`;

export function Laptop() {
  return (
    <div>
      <LaptopContainer className="m-2">
        <Lap>
          <Screen className="Screen">
            <Material src={material} />
            <Neck src={neck} />
          </Screen>
          <Keyboard className="Keyboard">
            <Surface src={surface} />
            <BelowSurface src={belowSurface} />
          </Keyboard>
          <Shadow src={shadow} />
        </Lap>
        {/* <Table>
          <Top>c</Top>
          <Left src={left} />
          <Right src={right} />
        </Table> */}
      </LaptopContainer>
    </div>
  );
}
