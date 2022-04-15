import React, { useRef } from "react";
import Transition from "react-transition-group/Transition";

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

  const transitionRef = useRef();

  return (
    <div
      className={`flex flex-col gap-1 px-4 rounded-md relative ${props.className}`}
    >
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

      <Transition
        in={props.invalid && props.children !== undefined}
        mountOnEnter
        unmountOnExit
        timeout={{ exit: 200 }}
        nodeRef={transitionRef}
      >
        {(state) => {
          let extraclass;
          switch (state) {
            case "entering":
            case "exiting":
            case "exited":
              extraclass = "opacity-0 -translate-y-0";
              break;

            case "entered":
              extraclass = "opacity-100";
              break;

            default:
              extraclass = "";
          }
          return (
            <div
              className={`order-3 transition-all ease-in duration-200 absolute -bottom-2 translate-y-1/2 ${extraclass}`}
              ref={transitionRef}
            >
              {props.children}
            </div>
          );
        }}
      </Transition>
    </div>
  );
};
export default InputControl;
