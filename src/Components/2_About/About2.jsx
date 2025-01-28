import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "motion/react";

const Title = styled.h3`
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

const BoxTitle = styled.h5`
  font-weight: var(--semibold);
  letter-spacing: 2.5px;
`;

const BoxContent = styled.p`
  font-size: clamp(1rem, 1.3vw, 2.3rem); /* Scales between ~10px and ~25px */
  letter-spacing: clamp(
    0.1rem,
    0.145vw,
    0.28rem
  ); /* Scales between ~1px and ~2.8px */
  line-height: 1.5; /* Retains 187.5% */
`;

export default function About2({ CubeComponent }) {
  const ref = useRef(null);

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
      </div>
      <div className="About2CubeContainer w-100">
        {/* <motion.div
          ref={ref}
          initial={{ y: -500 }}
          whileInView={{ opacity: 10, y: 0 }}
          transition={{ duration: 0.7 }}
        > */}
        <CubeComponent
          Width="7vw"
          className={`CubeAbout2 float-right`}
          moveElement={0}
        />
        {/* </motion.div> */}
      </div>
    </div>
  );
}
