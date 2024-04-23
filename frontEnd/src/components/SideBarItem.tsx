import { NavLink } from "react-router-dom";

type SideBarItemProps = {
  name: string;
  to: string;
  isTitle: boolean;
};

const SideBarItem = ({ name, to, isTitle }: SideBarItemProps) => {
  const itemClasses = isTitle
    ? "bg-black text-white text-lg w-full block py-2 px-4"
    : "bg-gray-900 hover:bg-gray-300 text-white w-full block my-2 py-2 px-4";
  return (
    <NavLink className={itemClasses} to={to}>
      {name}
    </NavLink>
  );
};

export default SideBarItem;
