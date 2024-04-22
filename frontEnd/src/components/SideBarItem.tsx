import { NavLink } from "react-router-dom";

type SideBarItemProps = {
  name: string;
  to: string;
  isTitle: boolean;
};

const SideBarItem = ({ name, to, isTitle }: SideBarItemProps) => {
  const itemClasses = isTitle
    ? "bg-red-500 border border-blue-500 w-full block py-2 px-4"
    : "bg-red-500 border border-blue-500 w-full block py-2 px-4";
  return (
    <NavLink className={itemClasses} to={to}>
      {name}
    </NavLink>
  );
};

export default SideBarItem;
