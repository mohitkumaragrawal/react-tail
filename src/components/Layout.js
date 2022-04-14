import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar />
      <div className="flex-1 overflow-auto">{props.children}</div>
    </div>
  );
};

export default Layout;
