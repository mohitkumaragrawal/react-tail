import { NavLink, useLocation } from "react-router-dom";

const HeaderLink = (props) => {
  const location = useLocation();

  return (
    <NavLink
      to={props.to}
      className={`select-none
        border-b-2
        border-transparent
        hover:cursor-pointer 
        hover:border-slate-800
        hover:text-slate-800
        transition-all ${
          location.pathname === props.to
            ? "border-slate-800 text-slate-600 font-semibold"
            : ""
        }`}
    >
      {props.children}
    </NavLink>
  );
};

export default HeaderLink;
