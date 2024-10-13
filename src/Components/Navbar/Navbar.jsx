import React from "react";
import Image from "../general/Image";
// import SplitScreen from "../general/SplitScreen";
import List from "../general/List";
import NavItem from "./NavItem";

import { Logomark } from "../../Utils/assets";
import { navdata } from "../../data";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="NavContainer">
      {/* <SplitScreen firstWidth={1} secondWidth={1}> */}
      <Image className="NavLogo" src={Logomark} alt="Logo" />
      <List
        items={navdata}
        srcName={"navItem"}
        className="d-flex w-50 justify-content-between"
        ItemComponent={(props) => <NavItem {...props} className="NavItem" />}
      ></List>
      {/* </SplitScreen> */}
    </div>
  );
}
