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

const Box = styled.div`
  width: 23vw;
  padding: 1.7vw 2.4vw;
  margin: 2.3vw;
  border-radius: 25px;
  background: var(
    --Linear-2,
    linear-gradient(200deg, #0140a0 13.16%, #00173a 98.72%)
  );
  box-shadow: 0px 4px 9px 0px #0140a0;
  color: var(--Lavender-Blue, #e0e5f3);
  text-align: center;

  &:nth-child(2) {
    position: relative;
    top: 2.3vw;
    background: var(
      --linear-1,
      linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
      linear-gradient(120deg, #0140a0 31.58%, #00173a 121.41%)
    );
  }
`;

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

export default function About2() {
  return (
    <div className="centered col">
      <Title>Why Choose Us</Title>
      <div className="AboutBoxesContainer">
        <Box>
          <BoxTitle>Future Ready</BoxTitle>
          <BoxContent>
            We stay ahead of the curve, helping you adapt to a rapidly evolving
            digital landscape.
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>Customized Solutions</BoxTitle>
          <BoxContent>
            No two businesses are the same. We craft solutions that fit your
            unique needs.
          </BoxContent>
        </Box>
        <Box>
          <BoxTitle>Trusted by Businesses</BoxTitle>
          <BoxContent>
            Our focus on quality, security, and compliance ensures your growth
            is sustainable and secure.
          </BoxContent>
        </Box>
      </div>
    </div>
  );
}
