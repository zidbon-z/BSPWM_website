import Bspwm from "./components/Bspwm";
import { Home } from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bspwm" element={<Bspwm />} />
        <Route />
        <Route />
      </Routes>
    </>
  );
}

export default App;
