const InputControl = (props) => {
  const inputProps = { ...props };
  inputProps.className = `outline-none 
    bg-transparent border-b-2 border-black peer order-2 transition-all 
    placeholder:font-semibold 
    placeholder:capitalize 
    placeholder:text-slate-500 
    placeholder:text-sm ${
      props.invalid ? "border-red-700" : "focus:border-teal-800"
    }`;

  // some props we don't want to forward to the input element;
  delete inputProps.invalid;
  delete inputProps.children;

  return (
    <div className={`flex flex-col gap-1 px-4 rounded-md ${props.className}`}>
      <input placeholder={`enter ${props.name}`} {...inputProps} />
      <label
        className={`uppercase tracking-wider text-sm text-black 
        font-semibold order-1 transition-all ${
          props.invalid ? "text-red-700" : "text-black peer-focus:text-teal-900"
        }`}
        htmlFor={props.id}
      >
        {props.name}
      </label>
      {props.invalid && props.children && (
        <div className="order-3">{props.children}</div>
      )}
    </div>
  );
};
export default InputControl;
