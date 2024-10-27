import React from "react";
import Cube from "../Cube/Cube";
import "./Footer.css";
import Grid from "@mui/material/Grid2";
import LogoWhite from "../../Assets/LogoWhite.svg";
import Media from "../Media/Media";
import { footerContent } from "../../data";

export default function Footer() {
  return (
    <div className="FooterContainer d-flex align-items-end">
      <div className="col align-items-center">
        <Cube
          hoverOneElement={true}
          Width="14vw"
          className={`CubePortfolio mb-4`}
        />
        <div className="BlueFooter col justify-content-around align-items-center">
          {/* <Grid item spacing={4}> */}
          <div>
            <Grid item xs={12} className="centered">
              <img className="LogoWhite" src={LogoWhite} alt="Logo" />
            </Grid>
          </div>
          {/* Dynamic Footer Columns */}
          <div>
            <Grid item container xs={12} className="FooterColumns">
              {footerContent.map((section, index) => (
                <Grid
                  container
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  xs={12}
                  md={4}
                  spacing={1}
                  key={index}
                  className="Grid"
                >
                  <h4 className="FooterHeading text-uppercase">
                    {section.heading}
                  </h4>
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
            <Grid item xs={12} className="d-flex justify-content-between py-3">
              <p className="CopyRights text-uppercase ">
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
