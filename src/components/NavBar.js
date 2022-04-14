import chitchat from "../svg/chitchat.svg";

import HeaderLink from "./HeaderLink";

const NavBar = () => {
  return (
    <div className="flex justify-between bg-white py-3 px-5 text-black items-center border-b-2 border-slate-300">
      <div>
        <img src={chitchat} className="w-8 h-8" />
      </div>
      <div className="text-2xl font-bold uppercase tracking-widest">
        ChitChat
      </div>
      <div className="flex justify-around gap-5">
        <HeaderLink to="/login">Login</HeaderLink>
        <HeaderLink to="/signup">Signup</HeaderLink>
      </div>
    </div>
  );
};

export default NavBar;
