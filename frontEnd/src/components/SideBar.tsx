import SideBarItem from "./SideBarItem";

type SideBarItemProps = {
  name: string;
  to: string;
  isTitle: boolean;
};

type SideBarProps = {
  sidelist: SideBarItemProps[];
  visi: boolean;
  visiSetter: () => void;
};

const SideBar = ({ sidelist, visi, visiSetter }: SideBarProps) => {
  return (
    <>
      <button
        className="sm:hidden row-start-1 col-start-1  px-2 bg-gray-500 border rounded border-green-500 w-auto sm:w-0"
        onClick={() => {
          visiSetter();
        }}
      >
        {visi ? "Close Sidebar" : "Open Sidebar"}
      </button>
      <div
        className={
          visi
            ? " bg-black row-start-2 col-start-1  left-0 z-40 w-64 h-auto transition-transform translate-x-0 sm:translate-x-0"
            : " bg-black row-start-2 col-start-1  z-40 w-64 h-10 transition-transform -translate-x-full sm:translate-x-0"
        }
        aria-label="Sidebar"
      >
        {sidelist.map(({ to, name, isTitle }: SideBarItemProps) => (
          <SideBarItem to={to} name={name} isTitle={isTitle} />
        ))}
      </div>
    </>
  );
};

export default SideBar;
