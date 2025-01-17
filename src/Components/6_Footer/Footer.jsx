import React from "react";
import Cube from "../Cube/Cube";
import "./Footer.css";
import Grid from "@mui/material/Grid2";
import LogoWhite from "../../Assets/LogoWhite.svg";
import Media from "../Media/Media";
import { footerContent } from "../../data";

export default function Footer() {
  return (
    <div
      className="FooterContainer col align-items-center"
      // justify-content-between
    >
      <div
        className="FooterCubeContainer
      "
        // flex-grow-1
        // pt-5
      >
        <Cube hoverOneElement={true} Width="14vw" className={``} />
      </div>
      <div className="BlueFooterContainer flex-grow-1">
        <div className="BlueFooter col justify-content-around align-items-center py-1">
          <div>
            <Grid
              item
              xs={12}
              // className="centered"
            >
              <img className="LogoWhite" src={LogoWhite} alt="Logo" />
            </Grid>
          </div>
          {/* Dynamic Footer Columns */}
          <div>
            <Grid container spacing={5}>
              {footerContent.map((section, index) => (
                <Grid
                  container
                  item
                  xs={12}
                  md={4}
                  rowSpacing={0}
                  key={index}
                  className="FooterColumn"
                  // justifyContent="center" // Center horizontally
                  // alignItems="center" // Center vertically
                  direction="column" // Default direction
                >
                  <h6 className="FooterHeading text-uppercase ">
                    {section.heading}
                  </h6>
                  <div className="FooterContent">
                    {section.items.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>

          {/* Media */}
          <div className="w-100 px-5">
            <hr className="WhiteHR" />
            <Grid
              item
              xs={12}
              className="CopyRightsContainer d-flex justify-content-between py-2"
            >
              <p className="CopyRights text-uppercase">
                © 2024 8-Bit Solutions. All Rights Reserved.
              </p>
              <Media WhiteMedia={true} />
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
