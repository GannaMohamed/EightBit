import React from "react";
import "./Home.css";
import HomeContent from "./HomeContent";
import Image from "../general/Image";
import { Logomark } from "../../Utils/assets";
import { useState } from "react";

export default function Home({ className, CubeComponent }) {
  const [move, setMove] = useState(false);

  const handleMouseEnter = () => {
    setMove(true);
  };
  const handleMouseLeave = () => {
    setMove(false);
  };

  return (
    <div id="home" className={`HomeContainer ${className}`}>
      <h1 className="HomeTitle extralight">8 BIT</h1>
      <CubeComponent
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        Width="20vw"
        className={`CubeHome`}
        move={move}
      >
        <Image className={`LogoOnCube ${move && "show"}`} src={Logomark} />
      </CubeComponent>
      <HomeContent show={move} />
    </div>
  );
}
