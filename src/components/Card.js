const Card = (props) => {
  return (
    <div
      className={`m-2 p-2 rounded-lg
         shadow-md border-2 border-slate-400
         bg-white
         shadow-slate-400 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
