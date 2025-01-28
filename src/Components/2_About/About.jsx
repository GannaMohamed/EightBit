import React, { useRef } from "react";
import "./About.css";
import vector from "../../Assets/WhoVector.svg";
// import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "motion/react";

export default function About({ className, CubeComponent }) {
  const ref = useRef(null);

  return (
    <div className={`AboutPage col ${className}`}>
      <img
        className="WhoVector DashVector"
        src={vector}
        alt="Curved Dashlines"
      />
      <div className="AboutContent d-flex col justify-content-center">
        {/* <motion.div
          ref={ref}
          initial={{ x: -500, y: -500 }}
          whileInView={{ x: 0, y: 0 }}
          transition={{ duration: 1 }}
        > */}
        <CubeComponent Width="15vw" className={`CubeAbout`} moveElement={0} />
        {/* </motion.div> */}
        <h3>Who We Are ?</h3>
        {/* </ScrollAnimation> */}
        <p className="AboutP1">
          At 8-Bit Solutions, we harness cutting-edge technology to drive
          business transformation. Whether you're a startup or a global
          enterprise, our innovative solutions are designed to optimize your
          operations and help you grow.
        </p>
        <hr></hr>
        <h3>Our Mission</h3>
        <p className="AboutP2">
          We are on a mission to empower businesses through technology. By
          blending creativity and advanced software, we deliver tailor-made
          solutions that enhance customer experiences and open new doors for
          success in the digital world.
        </p>
      </div>
    </div>
  );
}
