const Button = (props) => {
  return (
    <button
      className={`
        bg-slate-800 
        text-white 
        rounded-lg f
        ont-semibold 
        text-lg 
        text-center 
        w-full 
        py-2
        hover:bg-slate-700
        hover:-translate-y-0.5
        active:translate-y-0
        transition-all
        ${props.className}`}
    >
      {props.children}
    </button>
  );
};
export default Button;
