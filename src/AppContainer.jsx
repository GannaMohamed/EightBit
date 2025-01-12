import React from "react";
import ControlledFlow from "./Components/general/ControlledFlow";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/1_Home/Home";
import About from "./Components/2_About/About";
import About2 from "./Components/2_About/About2";
import Portfolio from "./Components/3_Portfolio/Portfolio";
import Contact from "./Components/5_Contact/Contact";
import Cube from "./Components/Cube/Cube";
import { servicesdata } from "./data";
import ServicesInfo from "./Components/4_Services/ServicesInfo";
import Footer from "./Components/6_Footer/Footer";

export default function AppContainer() {
  return (
    <ControlledFlow
      className="ControlledFlow"
      // onCubeTransform={handleCubeTransform}
    >
      <Home id="home" CubeComponent={(props) => <Cube {...props} />} />
      <About id="about" CubeComponent={(props) => <Cube {...props} />} />
      <About2 CubeComponent={(props) => <Cube {...props} />} />
      <Portfolio
        CubeComponent={(props) => <Cube {...props} />}
        id="portfolio"
        type={"web"}
      />
      <Portfolio
        CubeComponent={(props) => <Cube {...props} />}
        id="portfolioMobile"
        type={"mobile"}
      ></Portfolio>
      {/* <Services id="services"></Services> */}
      {servicesdata.map((service) => (
        <ServicesInfo service={service} />
      ))}
      <Contact id="contact" />
      <Footer id="footer" />
    </ControlledFlow>
  );
}
// <div>
//     <DataSourceRender
//       getData={() => fetchData("/api/kza/1")}
//       render={(resource) => <kzaInfo kza={resource} />}
//     />
//   </div>
