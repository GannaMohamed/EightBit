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

//Animation GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

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

  // const FadeUp = batch(Fade(), Move(), Sticky());

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin(ScrollSmoother);

    // frame1: 8BIT APPEARS
    // gsap.to(".HomeContainer", {
    //   scrollTrigger: ".Home", // start the animation when ".box" enters the viewport (once)
    //   y: -500,
    // });

    // ScrollSmoother.create({
    //   smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    //   effects: true, // looks for data-speed and data-lag attributes on elements
    //   smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    // });

    // frame2: CubeHome to CubeAbout
    gsap.to(".CubeHome", {
      duration: 0.7,
      y: "35vw",
      x: "35vw",
      scrollTrigger: {
        trigger: ".AboutPage",
        start: "top 60%",
        end: "top 40%",
        toggleActions: "play none reverse resume",
      },
    });

    // frame3: CubeAbout to CubeAbout2
    gsap.to(".CubeAbout", {
      duration: 0.7,
      y: "80vw",
      // width: "10vw",
      scrollTrigger: {
        trigger: ".About2Page",
        start: "top 60%",
        end: "top 40%",
        toggleActions: "play none reverse resume",
      },
    });

    // frame4: CubeAbout2 to CubePortfolio
    gsap.to(".CubeAbout2", {
      duration: 0.7,
      y: "20.255vw",
      x: "-5.787vw",
      scrollTrigger: {
        trigger: ".PortfolioPage",
        start: "top 60%",
        end: "top 40%",
        toggleActions: "play none reverse resume",
      },
    });

    // frame5: CubePortfolio to CubeServices
    gsap.to(".CubePortfolio", {
      duration: 0.7,
      y: "46.296vw",
      scrollTrigger: {
        trigger: ".ServicesInfo",
        start: "top 60%",
        end: "top 40%",
        toggleActions: "play none reverse resume",
      },
    });

    // frame6: CubeServices to CubeContact
    gsap.to(".CubePortfolio", {
      duration: 0.7,
      y: "46.296vw",
      scrollTrigger: {
        trigger: ".ServicesInfo",
        start: "top 60%",
        end: "top 40%",
        toggleActions: "play none reverse resume",
      },
    });
  });

  return (
    <div className="App">
      <div className="Background">
        <div className="GradientContainer">
          <div className="ellipse ellipse1"></div>
          <div className="ellipse ellipse2 "></div>
        </div>
      </div>
      <Navbar />
      {/* <ScrollContainer> */}
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
        {/* <Portfolio type={"mobile"}></Portfolio> */}
        {/* <Services id="services"></Services> */}
        {servicesdata.map((service) => (
          <ServicesInfo service={service} />
        ))}
        <Contact id="contact"></Contact>
      </ControlledFlow>
      {/* </ScrollContainer> */}
    </div>
  );
}

export default App;
