import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis"; // Make sure these are installed
import "./ControlledFlow.css";
import { useRef, useEffect, useState } from "react";

export default function ControlledFlow({ children, className }) {
  const sectionsRef = useRef([]);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("fade-up");
          } else {
            entry.target.classList.add("fade-up");
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={className}>
      <ReactLenis root>
        {React.Children.map(children, (child, index) => (
          <div
            id={child.props.id}
            className="Page"
            ref={(el) => (sectionsRef.current[index] = el)}
          >
            {child}
          </div>
        ))}
      </ReactLenis>
    </div>
  );
}
