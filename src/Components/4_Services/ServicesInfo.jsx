import React from "react";
import SplitScreen from "../general/SplitScreen";
import arrow from "../../Assets/arrow.svg";
import "./Services.css";

export default function ServicesInfo({ service }) {
  return (
    <div className="ServicesInfo">
      <SplitScreen firstWidth={1} secondWidth={4}>
        <div className="position-relative" style={{ height: "fit-content" }}>
          <div className="NumberSquare position-absolute"></div>
          <div className="Number position-absolute" style={{ left: "3.2vw" }}>
            {service.index}
          </div>
        </div>
        <div>
          <h2 className="Head">{service.head}</h2>
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
