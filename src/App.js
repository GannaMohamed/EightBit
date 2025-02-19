import "./App.css";
import "./Utils/style.css";
import "./Utils/fonts.css";

import { useEffect } from "react";
import { throttle } from "lodash";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContainer from "./AppContainer";
import Test from "./Test";
import Navbar from "./Components/Navbar/Navbar";
import { ResourceLoader } from "./Models/ResourceLoader";
import FullPortfolio from "./Components/3_Portfolio/FullPortfolio";

// import { GetAllProjects } from "./Models/ProjectModel";

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

  // useEffect(() => {
  //   GetAllProjects();
  // });

  return (
    <BrowserRouter>
      <div className="App">
        <div className="Background">
          <div className="GradientContainer">
            <div className="ellipse ellipse1"></div>
            <div className="ellipse ellipse2 "></div>
          </div>
        </div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<AppContainer title="8 Bit" />} />
          <Route path="/portfolio" element={<FullPortfolio />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="*" element={<PageNotFound title="404" />} /> */}
        </Routes>
        {/* </ScrollContainer> */}
        {/* <AppContainer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
