import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BurgerMenu = styled.div``;

const mobileBreakpoint = 768;

export default function withBurgerNav(Component) {
  return (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(
      window.innerWidth <= mobileBreakpoint
    );

    const newProps = {
      isMobile: isMobile,
      isMenuOpen: isMenuOpen,
    };
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= mobileBreakpoint);
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <div className="d-flex justify-content-between p-2">
        <Component {...props} {...newProps} />
        <BurgerMenu className="BurgerMenu" onClick={toggleMenu}>
          <div class="menu-icon">
            <input class="menu-icon__cheeckbox" type="checkbox" />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </BurgerMenu>
      </div>
    );
  };
}
