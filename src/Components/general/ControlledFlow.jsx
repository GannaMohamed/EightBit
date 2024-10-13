import React from "react";
import "./ControlledFlow.css";

export default function ControlledFlow({ children, className }) {
  return <div className={className}>{children}</div>;
}
