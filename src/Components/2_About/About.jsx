import React from "react";
import "./About.css";

export default function About({ className }) {
  return (
    <div className={`AboutPage col justify-content-center ${className}`}>
      <div className="AboutContainer">
        <h2 className="AboutTitle">Who We Are ?</h2>
        <p style={{ width: "50%" }} className="AboutContent">
          At 8-Bit Solutions, we harness cutting-edge technology to drive
          business transformation. Whether you're a startup or a global
          enterprise, our innovative solutions are designed to optimize your
          operations and help you grow.
        </p>
      </div>
      <div>
        <h2 className="AboutTitle">Our Mission</h2>
        <p style={{ width: "75%" }} className="AboutContent">
          We are on a mission to empower businesses through technology. By
          blending creativity and advanced software, we deliver tailor-made
          solutions that enhance customer experiences and open new doors for
          success in the digital world.
        </p>
      </div>
    </div>
  );
}
