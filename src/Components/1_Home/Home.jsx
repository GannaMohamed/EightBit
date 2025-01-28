import React, { useEffect, useRef } from "react";
import "./Home.css";
import HomeContent from "./HomeContent";
import Image from "../general/Image";
import { Logomark } from "../../Utils/assets";
import { useState } from "react";
import { motion } from "motion/react";

// import { motion } from "motion/react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ScrollAnimation from "react-animate-on-scroll";

export default function Home({ className, CubeComponent }) {
  const ref = useRef(null);

  const [move, setMove] = useState(false);
  useEffect(() => {
    // document.addEventListener("DOMContentLoaded", () => {
    //   const elements = document.querySelectorAll(".hidden");
    //   console.log(elements + "efed;m");
    //   const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         entry.target.classList.add("visible");
    //         observer.unobserve(entry.target); // Stop observing once visible
    //       }
    //     });
    //   });
    //   elements.forEach((el) => observer.observe(el));
    // });
    // AOS.init({
    //   duration: 700,
    //   startEvent: "DOMContentLoaded",
    // });
  }, []);
  const handleMouseEnter = () => {
    setMove(true);
  };
  const handleMouseLeave = () => {
    setMove(false);
  };

  return (
    <div id="home" className={`HomeContainer ${className}`}>
      {/* <ScrollAnimation animateIn="fadeIn"> */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Initial state (hidden and shifted up)
        whileInView={{ opacity: 10, y: 0 }}
        // animate={{
        //   rotate: [12, 0, -12, 0, 12, 0, -12, 0, 12, 0, -12, 0],
        // }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="HomeTitle extralight">8 BIT</h1>
      </motion.div>
      {/* </ScrollAnimation> */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, zoom: 0 }}
        whileInView={{ opacity: 10, zoom: 1 }}
        // animate={{
        //   rotate: [12, 0, -12, 0, 12, 0, -12, 0, 12, 0, -12, 0],
        // }}
        transition={{ duration: 0.5 }}
      >
        <CubeComponent
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          Width="20vw"
          className={`CubeHome`}
          shadow={true}
          move={move}
        >
          <Image className={`LogoOnCube ${move && "show"}`} src={Logomark} />
        </CubeComponent>
      </motion.div>
      <HomeContent show={move} />
    </div>
  );
}
