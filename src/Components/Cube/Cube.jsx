import React from "react";
import "./Cube.css";
import styled from "styled-components";
import { Animator } from "react-scroll-motion";

const CubeElement1 = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="221"
      viewBox="0 0 192 221"
      fill="none"
      className={className}
    >
      <path
        d="M94.553 0.5L191.275 55.9156L97.4546 109.669L0.73219 54.2531L94.553 0.5Z"
        fill="url(#paint0_linear_325_1524)"
      />
      <path
        d="M0.732178 54.2529L97.4546 109.669V220.5L0.732178 165.084V54.2529Z"
        fill="url(#paint1_linear_325_1524)"
      />
      <path
        d="M97.4546 109.669L191.275 55.9158V166.747L97.4546 220.5V109.669Z"
        fill="url(#paint2_linear_325_1524)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_325_1524"
          x1="97.3938"
          y1="109.661"
          x2="94.8942"
          y2="0.467248"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_325_1524"
          x1="0.732178"
          y1="54.2529"
          x2="120.368"
          y2="72.814"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0148B5" />
          <stop offset="1" stop-color="#052453" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_325_1524"
          x1="97.4546"
          y1="109.567"
          x2="183.24"
          y2="99.3933"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
const CubeElement2 = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="191"
      height="220"
      viewBox="0 0 191 220"
      fill="none"
      className={className}
    >
      <path
        d="M72.361 12.4281C84.3412 5.56424 103.765 5.56424 115.745 12.4281L190.775 55.4156L96.9547 109.169L0.232221 53.7531L72.361 12.4281Z"
        fill="url(#paint0_linear_56_68)"
      />
      <path
        d="M0.232224 53.7531L96.9547 109.169V220L21.9242 177.012C9.94409 170.149 0.232224 153.391 0.232224 139.584V53.7531Z"
        fill="url(#paint1_linear_56_68)"
      />
      <path
        d="M96.9547 109.169L190.775 55.4156V141.247C190.775 155.054 181.064 171.811 169.083 178.675L96.9547 220V109.169Z"
        fill="url(#paint2_linear_56_68)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_56_68"
          x1="96.8938"
          y1="109.161"
          x2="94.3943"
          y2="-0.0327521"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_56_68"
          x1="0.232224"
          y1="53.7531"
          x2="119.868"
          y2="72.3142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0148B5" />
          <stop offset="1" stop-color="#052453" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_56_68"
          x1="96.9547"
          y1="109.067"
          x2="182.74"
          y2="98.8931"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
const CubeElement3 = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="220"
      viewBox="0 0 192 220"
      fill="none"
      className={className}
    >
      <path
        d="M94.7775 0L191.5 55.4156L97.6792 109.169L0.956738 53.7531L94.7775 0Z"
        fill="url(#paint0_linear_56_72)"
      />
      <path
        d="M0.956746 53.7531L97.6792 109.169V220L22.6488 177.012C10.6686 170.149 0.956746 153.391 0.956746 139.584V53.7531Z"
        fill="url(#paint1_linear_56_72)"
      />
      <path
        d="M97.6792 109.169L191.5 55.4156V141.247C191.5 155.054 181.788 171.811 169.808 178.675L97.6792 220V109.169Z"
        fill="url(#paint2_linear_56_72)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_56_72"
          x1="97.6183"
          y1="109.161"
          x2="95.1188"
          y2="-0.0327521"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_56_72"
          x1="0.956746"
          y1="53.7531"
          x2="120.592"
          y2="72.3142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0148B5" />
          <stop offset="1" stop-color="#052453" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_56_72"
          x1="97.6792"
          y1="109.067"
          x2="183.465"
          y2="98.8931"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
const CubeElement4 = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="191"
      height="220"
      viewBox="0 0 191 220"
      fill="none"
      className={className}
    >
      <path
        d="M94.053 0L190.775 55.4156L96.9547 109.169L0.232221 53.7531L94.053 0Z"
        fill="url(#paint0_linear_56_80)"
      />
      <path
        d="M0.232224 53.7531L96.9547 109.169V220L0.232224 164.584V53.7531Z"
        fill="url(#paint1_linear_56_80)"
      />
      <path
        d="M96.9547 109.169L190.775 55.4156V166.247L96.9547 220V109.169Z"
        fill="url(#paint2_linear_56_80)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_56_80"
          x1="96.8938"
          y1="109.161"
          x2="94.3943"
          y2="-0.0327521"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_56_80"
          x1="0.232224"
          y1="53.7531"
          x2="119.868"
          y2="72.3142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0148B5" />
          <stop offset="1" stop-color="#052453" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_56_80"
          x1="96.9547"
          y1="109.067"
          x2="182.74"
          y2="98.8931"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
const CubeElement5 = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="220"
      viewBox="0 0 192 220"
      fill="none"
      className={className}
    >
      <path
        d="M94.3208 0L191.043 55.4156L97.2224 109.169L0.49999 53.7531L94.3208 0Z"
        fill="url(#paint0_linear_56_36)"
      />
      <path
        d="M0.5 53.7532L97.2225 109.169V220L22.192 177.013C10.2119 170.149 0.5 153.392 0.5 139.584V53.7532Z"
        fill="url(#paint1_linear_56_36)"
      />
      <path
        d="M97.2225 109.169L191.043 55.4156V141.247C191.043 155.054 181.331 171.811 169.351 178.675L97.2225 220V109.169Z"
        fill="url(#paint2_linear_56_36)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_56_36"
          x1="97.1616"
          y1="109.161"
          x2="94.662"
          y2="-0.0327521"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_56_36"
          x1="0.5"
          y1="53.7532"
          x2="120.135"
          y2="72.3142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0148B5" />
          <stop offset="1" stop-color="#052453" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_56_36"
          x1="97.2224"
          y1="109.067"
          x2="183.008"
          y2="98.8931"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
const CubeElement6 = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="221"
      viewBox="0 0 192 221"
      fill="none"
      className={className}
    >
      <path
        d="M94.553 0.5L191.275 55.9156L97.4546 109.669L0.73219 54.2531L94.553 0.5Z"
        fill="url(#paint0_linear_325_1524)"
      />
      <path
        d="M0.732178 54.2529L97.4546 109.669V220.5L0.732178 165.084V54.2529Z"
        fill="url(#paint1_linear_325_1524)"
      />
      <path
        d="M97.4546 109.669L191.275 55.9158V166.747L97.4546 220.5V109.669Z"
        fill="url(#paint2_linear_325_1524)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_325_1524"
          x1="97.3938"
          y1="109.661"
          x2="94.8942"
          y2="0.467248"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_325_1524"
          x1="0.732178"
          y1="54.2529"
          x2="120.368"
          y2="72.814"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0148B5" />
          <stop offset="1" stop-color="#052453" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_325_1524"
          x1="97.4546"
          y1="109.567"
          x2="183.24"
          y2="99.3933"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
const CubeElement7 = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="220"
      viewBox="0 0 192 220"
      fill="none"
      className={className}
    >
      <path
        d="M94.7698 0L191.492 55.4156L97.6715 109.169L0.949033 53.7531L94.7698 0Z"
        fill="url(#paint0_linear_56_32)"
      />
      <path
        d="M0.949039 53.7532L97.6715 109.169V220L22.6411 177.013C10.6609 170.149 0.949039 153.392 0.949039 139.584V53.7532Z"
        fill="url(#paint1_linear_56_32)"
      />
      <path
        d="M97.6715 109.169L191.492 55.4156V141.247C191.492 155.054 181.78 171.811 169.8 178.675L97.6715 220V109.169Z"
        fill="url(#paint2_linear_56_32)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_56_32"
          x1="97.6106"
          y1="109.161"
          x2="95.1111"
          y2="-0.0327521"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_56_32"
          x1="0.949039"
          y1="53.7532"
          x2="120.584"
          y2="72.3142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0148B5" />
          <stop offset="1" stop-color="#052453" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_56_32"
          x1="97.6715"
          y1="109.067"
          x2="183.457"
          y2="98.8931"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
const CubeElement8 = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="191"
      height="220"
      viewBox="0 0 191 220"
      fill="none"
      className={className}
    >
      <path
        d="M94.0453 0L190.768 55.4156L96.947 109.169L0.224507 53.7531L94.0453 0Z"
        fill="url(#paint0_linear_56_48)"
      />
      <path
        d="M0.224518 53.7532L96.947 109.169V220L0.224518 164.584V53.7532Z"
        fill="url(#paint1_linear_56_48)"
      />
      <path
        d="M96.947 109.169L190.768 55.4156V141.247C190.768 155.054 181.056 171.811 169.076 178.675L96.947 220V109.169Z"
        fill="url(#paint2_linear_56_48)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_56_48"
          x1="96.8861"
          y1="109.161"
          x2="94.3866"
          y2="-0.0327521"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_56_48"
          x1="0.224518"
          y1="53.7532"
          x2="119.86"
          y2="72.3142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0148B5" />
          <stop offset="1" stop-color="#052453" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_56_48"
          x1="96.9469"
          y1="109.067"
          x2="182.732"
          y2="98.8931"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#052453" />
          <stop offset="1" stop-color="#0140A0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const CubeContainer = styled.div`
  position: relative;
  width: ${(props) => props.cubeWidth};
  height: ${(props) => props.cubeWidth};
  aspect-ratio: 1;
  transition: filter 0.5s;
  z-index: 1000;
`;

// const CubeElement = ({ className, move, SvgComponent }) => {
//   const initialPositions = {
//     cube1: { top: "12%", left: "0%" },
//     cube2: { top: "0%", left: "25%" },
//     cube3: { top: "12%", left: "46%" },
//     cube4: { top: "24%", left: "25%" },
//     cube5: { top: "37%", left: "4%" },
//     cube6: { top: "16.67%", left: "16.67%" },
//     cube7: { top: "36%", left: "4%" },
//     cube8: { top: "49%", left: "25%" },
//   };

//   const calculatePosition = (initialTop, initialLeft) => {
//     const top = parseFloat(initialTop) - (move ? 5 : 0); // Move 5% opposite if move is true
//     const left = parseFloat(initialLeft) - (move ? 5 : 0); // Move 5% opposite if move is true
//     return { top: `${top}%`, left: `${left}%` };
//   };

//   const position = calculatePosition(
//     initialPositions[className].top,
//     initialPositions[className].left
//   );

//   return (
//     <div
//       className={`cube ${className}`}
//       style={{
//         position: "absolute",
//         top: position.top,
//         left: position.left,
//         transition: "all 0.3s ease",
//       }}
//     >
//       <SvgComponent />
//     </div>
//   );
// };

export default function Cube({
  className,
  Width = "500px",
  children,
  props,
  animation,
  move,
  moveElement,
  handleMouseEnter,
  handleMouseLeave,
  hoverOneElement,
}) {
  return (
    // <Animator animation={animation?.animation}>
    <CubeContainer
      className={`Cube  ${move && "move"} ${className}`}
      cubeWidth={Width}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <CubeElement5
        className={`cube5 
        ${(move || moveElement === 4) && "move"}
        ${hoverOneElement && "hoverOneElement5"}
        
        `}
      />
      <CubeElement6
        className={`cube6 ${(move || moveElement === 5) && "move"}
        ${hoverOneElement && "hoverOneElement6"}`}
      />
      <CubeElement7
        className={`cube7 ${(move || moveElement === 6) && "move"}
        ${hoverOneElement && "hoverOneElement7"}`}
      />
      <CubeElement8
        className={`cube8 ${(move || moveElement === 7) && "move"}
        ${hoverOneElement && "hoverOneElement8"}`}
      />
      <CubeElement2
        className={`cube2 ${(move || moveElement === 1) && "move"}
        ${hoverOneElement && "hoverOneElement2"}`}
      />
      <CubeElement3
        className={`cube3 ${(move || moveElement === 2) && "move"}
        ${hoverOneElement && "hoverOneElement3"}`}
      />
      <CubeElement1
        className={`cube1 ${(move || moveElement === 0) && "move"}
        ${hoverOneElement && "hoverOneElement1"}`}
      />
      <CubeElement4
        className={`cube4 ${(move || moveElement === 3) && "move"}
        ${hoverOneElement && "hoverOneElement4"}`}
      />

      {children}

      {/* <CubeElement className={`cube1 ${move && 'move'}`} move={move} /> */}
    </CubeContainer>
    // </Animator>
  );
}
