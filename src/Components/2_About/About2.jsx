import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 5vw;
  letter-spacing: 10px;
  font-weight: var(--bold);
  background: var(
    --Linear-3,
    linear-gradient(180deg, #052453 20.5%, #fff 188%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Box = styled.div``;

const BoxTitle = styled.div`
  font-weight: var(--semibold);
  font-size: 2vw;
  letter-spacing: 2.1px;
`;

const BoxContent = styled.div`
  line-height: 36px;
  letter-spacing: 1.75px;
  font-size: 1.4vw;
`;

export default function About2({ CubeComponent }) {
  return (
    <div className="About2Page centered col">
      <Title>Why Choose Us</Title>
      <div className="AboutBoxesContainer">
        <Box className="Box">
          <BoxTitle>Future Ready</BoxTitle>
          <BoxContent>
            We stay ahead of the curve, helping you adapt to a rapidly evolving
            digital landscape.
          </BoxContent>
        </Box>
        <Box className="Box SecBox">
          <BoxTitle>Customized Solutions</BoxTitle>
          <BoxContent>
            No two businesses are the same. We craft solutions that fit your
            unique needs.
          </BoxContent>
        </Box>
        <Box className="Box">
          <BoxTitle>Trusted by Businesses</BoxTitle>
          <BoxContent>
            Our focus on quality, security, and compliance ensures your growth
            is sustainable and secure.
          </BoxContent>
        </Box>
      </div>{" "}
      <div className="w-100">
        <CubeComponent
          Width="10vw"
          className={`CubeAbout2 float-right`}
          moveElement={0}
        />
      </div>
    </div>
  );
}
