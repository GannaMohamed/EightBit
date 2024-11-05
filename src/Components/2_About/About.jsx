import React from "react";
import "./About.css";
import vector from "../../Assets/WhoVector.svg";

export default function About({ className, CubeComponent }) {
  return (
    <div className={`AboutPage col ${className}`}>
      <img className="WhoVector" src={vector} alt="Curved Dashlines" />
      <div className="AboutContent d-flex col justify-content-center">
        {/* <CubeComponent Width="20vw" className={`CubeAbout`} moveElement={0} /> */}
        <h2>Who We Are ?</h2>
        <p style={{ width: "50%" }}>
          At 8-Bit Solutions, we harness cutting-edge technology to drive
          business transformation. Whether you're a startup or a global
          enterprise, our innovative solutions are designed to optimize your
          operations and help you grow.
        </p>
        <h2>Our Mission</h2>
        <p style={{ width: "75%" }}>
          We are on a mission to empower businesses through technology. By
          blending creativity and advanced software, we deliver tailor-made
          solutions that enhance customer experiences and open new doors for
          success in the digital world.
        </p>
      </div>
    </div>
  );
}
