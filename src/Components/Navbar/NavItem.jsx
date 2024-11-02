import React from "react";
import styled from "styled-components";
import { useLenis } from "@studio-freight/react-lenis";

export default function NavItem({ navItem, className }) {
  const { name, url } = navItem;
  const lenis = useLenis();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    lenis.scrollTo(url); // Smooth scroll to the target section
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
