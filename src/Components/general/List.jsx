import React from "react";

export default function List({ items, srcName, className, ItemComponent }) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <ItemComponent {...{ [srcName]: item }} key={index + Math.random()} />
      ))}
    </div>
  );
}
