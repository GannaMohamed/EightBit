import React from "react";
import styled from "styled-components";

export default function NavItem({ navItem, className }) {
  const { name, url } = navItem;

  const NavItemLi = styled.li`
    list-style-type: none;
  `;

  return (
    <NavItemLi href={url} className={className}>
      {name}
    </NavItemLi>
  );
}
