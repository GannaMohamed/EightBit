// import React from "react";
// import styled from "styled-components";
// import "./Home.css";

// import Cube from "../Cube/Cube";
// import HomeContent from "./HomeContent";

// export default function Home({ className }) {
//   return (
//     <div
//       className={`position-relative border border-primary centered ${className}`}
//       // style={{ position: "relative" }}
//     >
//       {/* <div className="centered col"> */}
//       <h1
//         // style={{ position: "absolute", top: 20 }}
//         className="HomeTitle extralight"
//         style={{
//           position: "relative",
//           bottom: 50,
//           margin: "0 30px",
//         }}
//       >
//         8 BIT
//       </h1>
//       {/* </div> */}
//       <Cube
//         // style={{
//         //   width: "40%",
//         //   zIndex: 1,
//         //   position: "absolute",
//         //   bottom: 0,
//         //   margin: "0 30px",
//         // }}
//         style={{}}
//       ></Cube>
//       {/* <HomeContent /> */}
//     </div>
//   );
// }

import React, { useEffect } from "react";
import "./Home.css";

import Cube from "../Cube/Cube";
import HomeContent from "./HomeContent";
import Image from "../general/Image";
import { Logomark } from "../../Utils/assets";
import { useState } from "react";

export default function Home({ className }) {
  const [move, setMove] = useState(false);

  const handleMouseEnter = () => {
    setMove(true);
  };
  const handleMouseLeave = () => {
    setMove(false);
  };

  return (
    <div className={`HomeContainer ${className}`}>
      <h1 className="HomeTitle extralight">8 BIT</h1>
      <Cube
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        Width="20vw"
        className={`CubeHome`}
        move={move}
        // moveElement={1}
      >
        <Image className={`LogoOnCube ${move && "show"}`} src={Logomark} />
      </Cube>
      <HomeContent show={move} />
    </div>
  );
}
