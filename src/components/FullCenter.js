const FullCenter = (props) => {
  return (
    <div
      className="h-full items-center justify-center flex flex-col
      bg-gradient-to-br from-indigo-500 to-red-300"
    >
      {props.children}
    </div>
  );
};

export default FullCenter;
