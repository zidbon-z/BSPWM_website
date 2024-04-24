import { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

type SideBarItem = {
  name: string;
  to: string;
  isTitle: boolean;
};
//const testSidebarProps3 = { name: "blue", to: "/shist", isTitle: true };
const Bspwm = () => {
  const testSidebarProps3: SideBarItem[] = [
    { name: "Getting Started", to: "#", isTitle: true },
    { name: "Installation", to: "installation", isTitle: false },
    { name: "Setup", to: "setup", isTitle: false },
    { name: "Configuration", to: "/ass", isTitle: true },
    { name: "bspwmrc", to: "/dick", isTitle: false },
  ];

  const [visi, setVisi] = useState(true);
  const visiSetter = () => {
    visi ? setVisi(false) : setVisi(true);
  };
  return (
    <div className="grid grid-cols-[auto,_1fr] grid-rows-[auto,_1fr] bg-black w-screen h-screen">
      <SideBar
        sidelist={testSidebarProps3}
        visi={visi}
        visiSetter={visiSetter}
      />
      <div
        className={
          visi
            ? " row-start-2 col-start-2 sm:col-start-2 bg-black sm:left-64 text-red-500"
            : " row-start-2 col-start-1 col-span-2 sm:col-start-2 bg-black sm:left-64 text-red-500"
        }
      >
        <div className="text-center">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bspwm;
