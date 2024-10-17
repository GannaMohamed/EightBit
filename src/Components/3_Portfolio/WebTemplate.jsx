import React from "react";
import Web from "../../Assets/Web.svg";

export default function WebTemplate({ img, className }) {
  return (
    <div>
      <img className={className} src={Web} alt="Web Portfolio" />
    </div>
  );
}
