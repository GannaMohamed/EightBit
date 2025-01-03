import React, { useState, useEffect } from "react";
import Image from "../general/Image";
import List from "../general/List";
import NavItem from "./NavItem";

import LogoFull from "../../Assets/LogoFull.svg";
import { navdata } from "../../data";
import "./Navbar.css";
import withBurgerNav from "./withBurgerNav";

function Navbar({ isMobile, isMenuOpen }) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Activate when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe each section
    navdata.forEach((item) => {
      const section = document.getElementById(item.url.replace("#", ""));
      if (section) observer.observe(section);
    });

    return () => {
      // Unobserve each section on cleanup
      navdata.forEach((item) => {
        const section = document.getElementById(item.url.replace("#", ""));
        if (section) observer.unobserve(section);
      });
    };
  }, [isMobile]);

  return (
    <>
      <div className="NavContainer">
        <Image className="NavLogo" src={LogoFull} alt="Logo" />
        {!isMobile ? (
          <List
            items={navdata}
            srcName={"navItem"}
            className="d-flex w-50 justify-content-between align-items-center"
            ItemComponent={(props) => (
              <NavItem
                {...props}
                className={`NavItem ${
                  activeSection === props.navItem.url.replace("#", "")
                    ? "active"
                    : ""
                }`}
              />
            )}
          />
        ) : (
          <>
            <List
              items={navdata}
              srcName={"navItem"}
              className={`MobileNavList ${isMenuOpen ? "show" : ""}`}
              ItemComponent={(props) => (
                <NavItem
                  {...props}
                  className={`NavItem ${
                    activeSection === props.navItem.url.replace("#", "")
                      ? "active"
                      : ""
                  }`}
                />
              )}
            />
          </>
        )}
      </div>
    </>
  );
}

export default withBurgerNav(Navbar);
