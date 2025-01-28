import React from "react";
import styled from "styled-components";
// import { useLenis } from "@studio-freight/react-lenis";

export default function NavItem({ navItem, className }) {
  const { name, url } = navItem;
  // const lenis = useLenis();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    const targetElement = document.querySelector(url); // Select the target element by its ID or class
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Scroll to the top of the target
      });
    }
  };
  const NavItemLi = styled.li`
    list-style-type: none;
  `;

  return (
    <NavItemLi className={className}>
      <a href={url} onClick={handleClick}>
        {name}
      </a>
    </NavItemLi>
  );
}
