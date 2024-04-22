import { useState } from "react";
import SideBarItem from "./SideBarItem";

type SideBarItemProps = {
  name: string;
  to: string;
  isTitle: boolean;
};

type SideBarProps = SideBarItemProps[];

const SideBar = ({ sidelist }: SideBarProps) => {
  const [visi, setVisi] = useState(true);
  return (
    <>
      <button
        className="bg-white w-10 sm:w-0"
        onClick={() => {
          visi ? setVisi(false) : setVisi(true);
        }}
      >
        X
      </button>
      <div
        id="default-sidebar"
        className={
          visi
            ? " bg-black fixed left-0 z-40 w-64 h-screen transition-transform translate-x-0 sm:translate-x-0"
            : " bg-black fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        }
        aria-label="Sidebar"
      >
        {sidelist.map(({ to, name, isTitle }: SideBarItemProps) =>
          isTitle ? <SideBarItem to={to} name={name} isTitle={isTitle} /> : "",
        )}
        <SideBarItem to="/bspwm/test" name="EAt a DIck" isTitle={false} />
      </div>
    </>
  );
};

export default SideBar;
