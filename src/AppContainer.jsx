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
        projectId="9c760684-b79d-493e-97ce-69e5e92117f9"
      />
      <Portfolio
        CubeComponent={(props) => <Cube {...props} />}
        id="portfolioMob"
        projectId="1dd8e6bc-116d-4c7f-b227-acfb1b90bd85"
      />
      {/* <Portfolio
        CubeComponent={(props) => <Cube {...props} />}
        id="portfolioMobile"
        type={"mobile"}
      ></Portfolio> */}
      {/* <Services id="services"></Services> */}
      {servicesdata.map((service) => (
        <ServicesInfo
          service={service}
          CubeComponent={(props) => <Cube {...props} />}
        />
      ))}
      <Contact id="contact" CubeComponent={(props) => <Cube {...props} />} />
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
