import "./App.css";
import "./Utils/style.css";

import Navbar from "./Components/Navbar/Navbar";
import ControlledFlow from "./Components/general/ControlledFlow";
import Home from "./Components/1_Home/Home";
import About from "./Components/2_About/About";
import Portfolio from "./Components/3_Portfolio/Portfolio";
import Services from "./Components/4_Services/Services";
import Contact from "./Components/5_Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ControlledFlow className="ControlledFlow">
        <Home className="Page"></Home>
        <About className="Page"></About>
        <Portfolio className="Page"></Portfolio>
        <Services className="Page"></Services>
        <Contact className="Page"></Contact>
      </ControlledFlow>
    </div>
  );
}

export default App;
