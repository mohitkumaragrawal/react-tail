const CardHeader = (props) => {
  return (
    <div className="font-bold text-2xl uppercase mx-4 my-5 text-teal-900">
      {props.children}
    </div>
  );
};

export default CardHeader;
