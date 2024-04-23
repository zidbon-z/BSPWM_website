import SideBar from "./SideBar";

type SideBarItem = {
  name: string;
  to: string;
  isTitle: boolean;
};
//const testSidebarProps3 = { name: "blue", to: "/shist", isTitle: true };
const Bspwm = () => {
  const testSidebarProps3: SideBarItem[] = [
    { name: "Getting Started", to: "#", isTitle: true },
    { name: "Installation", to: "/shit", isTitle: false },
    { name: "Setup", to: "/dick", isTitle: false },
    { name: "Configuration", to: "/ass", isTitle: true },
    { name: "bspwmrc", to: "/dick", isTitle: false },
  ];
  return (
    <div className="bg-black w-screen h-screen">
      <div>
        <SideBar sidelist={testSidebarProps3} />
      </div>
      <div className=" fixed bg-black sm:left-64 text-red-500">
        <div>
          <div className="">Bspwm</div>
        </div>
      </div>
    </div>
  );
};

export default Bspwm;
