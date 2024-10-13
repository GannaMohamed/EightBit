import React from "react";
import { cube } from "../../Utils/assets";
import Image from "../../Components/general/Image";

export default function Cube({ style, children, childrenStyle }) {
  return (
    <>
      {children}
      <Image style={style} src={cube} />
    </>
  );
}
