import "./App.css";
import "./Utils/style.css";

import Navbar from "./Components/Navbar/Navbar";
import ControlledFlow from "./Components/general/ControlledFlow";
import Home from "./Components/1_Home/Home";
import About from "./Components/2_About/About";
import About2 from "./Components/2_About/About2";
import Portfolio from "./Components/3_Portfolio/Portfolio";
import Contact from "./Components/5_Contact/Contact";
import Cube from "./Components/Cube/Cube";
// import Footer from "./Components/6_Footer/Footer";
import { servicesdata } from "./data";
import ServicesInfo from "./Components/4_Services/ServicesInfo";

import {
  Move,
  MoveIn,
  Sticky,
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  MoveOut,
} from "react-scroll-motion";

function App() {
  // const [cubeStyle, setCubeStyle] = useState({});

  // const handleCubeTransform = (sectionIndex) => {
  //   switch (sectionIndex) {
  //     case 0:
  //       setCubeStyle({ transform: "scale(1) translateY(0)" }); // Initial state
  //       break;
  //     case 1:
  //       setCubeStyle({ transform: "scale(0.8) translateY(50vh)" }); // Transformation in section 2
  //       break;
  //     case 2:
  //       setCubeStyle({ transform: "scale(0.6) translateY(100vh)" }); // Transformation in section 3
  //       break;
  //     // Add more cases for further sections as needed
  //     default:
  //       setCubeStyle({ transform: "scale(1)" });
  //       break;
  //   }
  // };
  return (
    <div className="App">
      <div className="Background">
        <div className="GradientContainer">
          <div className="ellipse ellipse1"></div>
          <div className="ellipse ellipse2 "></div>
        </div>
      </div>
      <Navbar />
      <ScrollContainer>
        <ControlledFlow
          className="ControlledFlow"
          // onCubeTransform={handleCubeTransform}
        >
          <Home
            id="home"
            CubeComponent={(props) => (
              <Cube
                // animationProps={{
                //   animation: batch(MoveOut(1000, 1000)),
                // }} // Makes it stay at a fixed point
                move={true}
                {...props}
              />
            )}
          />

          <About
            id="about"
            CubeComponent={(props) => (
              <Cube
                // animationProps={{
                //   animation: batch(MoveIn(1000, 0), MoveOut(1000, 0)),
                // }} // Animates cube out to the right
                {...props}
              />
            )}
          ></About>
          <About2></About2>
          <Portfolio id="portfolio" type={"web"}></Portfolio>
          <Portfolio type={"mobile"}></Portfolio>
          {/* <Services id="services"></Services> */}
          {servicesdata.map((service) => (
            <ServicesInfo service={service} />
          ))}
          <Contact id="contact"></Contact>
        </ControlledFlow>
      </ScrollContainer>
    </div>
  );
}

export default App;
