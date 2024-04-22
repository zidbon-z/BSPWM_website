import { NavLink } from "react-router-dom";

type SideBarItemProps = {
  name: string;
  to: string;
  isTitle: boolean;
};

const SideBarItem = (props: SideBarItemProps) => {
  return <NavLink to={props.to}>{props.name}</NavLink>;
};

export default SideBarItem;
