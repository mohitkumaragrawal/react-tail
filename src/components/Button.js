const Button = (props) => {
  const buttonProps = { ...props };
  delete buttonProps.className;

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

        disabled:bg-slate-700
        disabled:hover:translate-y-0
        disabled:opacity-60
        ${props.className}`}
      {...buttonProps}
    >
      {props.children}
    </button>
  );
};
export default Button;
