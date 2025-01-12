import React, { useRef } from "react";
import "./HorizontalScroll.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalScroll({ children }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55]%"]);

  return (
    <div className="HorizontalScroll">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { className: "componentItem" });
        }
        return child;
      })}
    </div>
  );
}

// <div className="carousel" ref={targetRef}>
//   <div className="contentContainer">
//     <motion.div className="components" style={{ x }}>

/* </motion.div>
        
      </div>
    </div> */
