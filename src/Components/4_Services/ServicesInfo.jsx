import React from "react";
import SplitScreen from "../general/SplitScreen";
import arrow from "../../Assets/arrow.svg";
import "./Services.css";
import styled from "styled-components";
import Vector1 from "../../Assets/Services1Vector.svg";
import Vector2 from "../../Assets/Services2Vector.svg";

const Heading = styled.h2`
  font-size: 7.407vw;
  letter-spacing: 1.481vw;
  background: linear-gradient(180deg, #052453 20.5%, #fff 188%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function ServicesInfo({ service, CubeComponent }) {
  return (
    <div
      id={service.index === "01" && "services"}
      className="ServicesInfo col justify-content-center"
    >
      <div className="d-flex" style={{ width: "80vw" }}>
        {service.index === "01" && (
          <div className="d-flex">
            <Heading>Services</Heading>
            <img
              src={Vector1}
              alt="Services Dashed Lines"
              style={{ width: "45vw" }}
            />
          </div>
        )}
        <div className="w-100 d-flex flex-row-reverse">
          <CubeComponent
            Width="10vw"
            className={`CubeServices`}
            moveElement={1}
          />
        </div>
      </div>
      <SplitScreen firstWidth={1} secondWidth={3}>
        <div className="position-relative" style={{ height: "fit-content" }}>
          <div className="NumberSquare position-absolute"></div>
          <div className="Number position-absolute" style={{ left: "3.2vw" }}>
            {service.index}
          </div>
        </div>
        <div>
          <h3 className="Head">{service.head}</h3>
          <div className="Body">{service.body}</div>
          <div className="ReadMore d-flex justify-content-between">
            <div className="ReadMoreText">Read More</div>
            <img className="Arrow" src={arrow} alt="Read More Arrow" />
          </div>
        </div>
      </SplitScreen>
    </div>
  );
}

// <div className="d-flex " style={{ width: "80vw" }}>
//   {service.index === "01" ? (
//     <div className="d-flex">
//       <Heading>Services</Heading>
//       <img
//         src={Vector1}
//         alt="Services Dashed Lines"
//         style={{ width: "45vw" }}
//       />
//     </div>
//   ) : (
//     <div className="Services2Header position-fixed">
//       <img
//         src={Vector2}
//         alt="Services Dashed Lines"
//         style={{ height: "15vh" }}
//         t
//       />
//     </div>
//   )}
//   <div className="w-100 d-flex flex-row-reverse">
//     <CubeComponent Width="10vw" className={`CubeServices`} moveElement={1} />
//   </div>
// </div>;
