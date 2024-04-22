import SideBar from "./SideBar";

type SideBarItem = {
  name: string;
  to: string;
  isTitle: boolean;
};
//const testSidebarProps3 = { name: "blue", to: "/shist", isTitle: true };
const Bspwm = () => {
  const testSidebarProps3: SideBarItem[] = [
    { name: "fuck", to: "/fuck", isTitle: true },
    { name: "shit", to: "/shit", isTitle: true },
    { name: "dick", to: "/dick", isTitle: true },
    { name: "ass", to: "/ass", isTitle: true },
  ];
  return (
    <div>
      <SideBar sidelist={testSidebarProps3} />
      <div>Bspwm</div>
    </div>
  );
};

export default Bspwm;
