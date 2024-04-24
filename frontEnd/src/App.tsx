import Bspwm from "./components/Bspwm";
import { Home } from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import BspwmInstallation from "./components/BspwmInstallation";
import BspwmSetup from "./components/BspwmSetup";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bspwm" element={<Bspwm />}>
            <Route path="" element={<BspwmInstallation />} />
            <Route path="installation" element={<BspwmInstallation />} />
            <Route path="setup" element={<BspwmSetup />} />
          </Route>
          <Route />
          <Route />
        </Routes>
      </div>
    </>
  );
}

export default App;
