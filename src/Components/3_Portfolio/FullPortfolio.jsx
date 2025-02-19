import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../../Assets/arrow.svg";
// import MobTemplate from "./MobTemplate";
// import screenImg from "../../Assets/FullPortfolioWeb/Screen.svg";
import keybaordImg from "../../Assets/FullPortfolioWeb/Keybaord.svg";
import mobPlacehold from "../../Assets/FullPortfolioWeb/MobPlaceholder.svg";
import webPlacehold from "../../Assets/FullPortfolioWeb/WebPlaceholder.svg";
import { ArrayResourceLoader } from "../../Models/ArrayResourceLoader";
import { NavLink } from "react-router-dom";
import Modal from "../general/Modal";
import StatusBadge from "../general/StatusBadges/StatusBadges";

export default function FullPortfolio() {
  return (
    <div className="p-5 col gap-3">
      <div className="d-flex align-items-center" style={{ gap: "20px" }}>
        <NavLink to={"/"}>
          <img className="BackArrow" src={arrow} alt="Back to Homepage" />
        </NavLink>
        <h3>Portfolio</h3>
      </div>
      {/* <div className="PortfoliosContainer d-flex">
        <PortfolioUnit ProjectType={"web"} />
        <PortfolioUnit ProjectType={"mob"} />
        <PortfolioUnit ProjectType={"mob"} />
      </div> */}
      <ArrayResourceLoader
        resourceUrl={"/project"}
        resourceName={"project"}
        ItemComponent={PortfolioUnit}
        className="PortfoliosContainer d-flex flex-wrap gap-5" //ex-PortfoliosContainer
      ></ArrayResourceLoader>
    </div>
  );
}

// Single Portfolio Unit Component
const WebScreen = styled.img`
  border: var(--oxfordBlue) 5px solid;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const Keyboard = styled.img``;
const MobScreen = styled.img`
  border: var(--oxfordBlue) 5px solid;
  border-radius: 20px;
`;
const MobButton = styled.div`
  background: var(--oxfordBlue);
  border-radius: 25px;
  padding: 5px;
  width: 30%;
  top: 7%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
`;
function PortfolioUnit({ project }) {
  const {
    name,
    desription,
    type,
    keyFeatures,
    technologies,
    platform,
    status,
    isShown,
    projectMedia,
    completionDate,
  } = project || {};

  const [showModal, setShowModal] = useState(false);

  const getTemplate = () => {
    const imageSrc =
      projectMedia.length !== 0
        ? projectMedia // if there's an image then use it
        : platform === "web"
        ? webPlacehold // if no image && type is web
        : mobPlacehold; // if no image && type is mob

    switch (platform) {
      case "web":
        return (
          <div className="col centered">
            {/* <div className="centered"> */}
            <WebScreen src={imageSrc} />
            {/* <img src={imageSrc} alt="Project" className="position-absolute" /> */}
            {/* </div> */}
            <Keyboard src={keybaordImg} />
          </div>
        );
      case "mobile":
        return (
          <div className="position-relative">
            <MobScreen src={imageSrc} alt="Portfolio" />
            <MobButton className="position-absolute" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{ gap: "10px" }}
      className={`PortfolioUnit p-3 ${platform === "web" ? "col" : "d-flex"}`}
    >
      <div className="w-100 col" style={{ gap: "2vh" }}>
        <p style={{ lineHeight: "unset", margin: "unset" }} className="bold">
          {name}
        </p>
        <div className="ProjectDescription">{desription}</div>
        <div className="showOnHover col" style={{ gap: "2vw" }}>
          <div className="centered" style={{ gap: "10px" }}>
            <a
              className="ToLiveProject"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p
                className="m-auto px-2 position-relative"
                style={{ fontSize: "medium", zIndex: "1" }}
              >
                LIVE DEMO
              </p>
            </a>
            <p
              className="MoreDetails"
              style={{
                fontSize: "medium",
                textDecoration: "underline",
                margin: "unset",
              }}
              onClick={() => setShowModal(true)}
            >
              More Details
            </p>
          </div>
        </div>
      </div>
      <div className="Port centered">{getTemplate()}</div>
      <Modal
        className="Modal"
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        <div
          className="modal-content flex-row centered px-3"
          style={{ gap: "2rem" }}
        >
          <div
            className="col"
            style={{ gap: "12px", padding: "20px", maxWidth: "90vw" }}
          >
            {/* Project Title & Status Badge */}
            <div className="modal-header">
              <p className="project-name">{name}</p>
              <StatusBadge status={status} />
            </div>

            {/* Technologies Badges */}
            <div className="badge-container">
              {technologies?.split(",").map((badge, index) => (
                <span key={index} className="badge">
                  {badge.trim()}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="description">{desription}</div>

            {/* Features List */}
            <div className="featuresContainer">
              <ul>
                {keyFeatures?.split(",").map((feature, index) => (
                  <li key={index} className="keyFeature">
                    {feature.trim()}
                  </li>
                ))}
              </ul>
            </div>

            {/* Completion Date */}
            <p className="completion-date">
              Completed on:{" "}
              {new Date(completionDate).toLocaleDateString("en-GB")}
            </p>
          </div>
          <div className="template mx-4">
            <div>{getTemplate()}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
