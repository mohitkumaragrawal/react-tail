import { useReducer, useCallback } from "react";

export const control_change = "control_change";
export const control_touched = "control_touched";

/**
 * @param {(value: string) => {[key: string]: string}} validator
 * @returns {[{value: string, errors: {[errorCode: string]: string}, valid: boolean, touched: boolean, inputProps: any}, (currState: any, action: {type: string}) => any]}
 */
const useValidator = (validator) => {
  /**
   * @param { {value: string, errors: {[errorCode: string]: string}, valid: boolean, touched: boolean} } currInputControl
   * @param {*} action
   */
  const inputControlReducer = useCallback(
    (currInputControl, action) => {
      switch (action.type) {
        case control_change:
          const newErrors = validator(action.value);
          const isValid = newErrors === null;
          return {
            ...currInputControl,
            valid: isValid,
            errors: newErrors,
            value: action.value,
          };
        case control_touched:
          return {
            ...currInputControl,
            touched: true,
          };
        default:
          throw new Error(`${action.type} is not handled`);
      }
    },
    [validator]
  );

  const initialError = validator("");

  const [inputControlState, dispatch] = useReducer(inputControlReducer, {
    value: "",
    errors: initialError,
    valid: initialError === null,
    touched: false,
  });

  return [
    {
      value: inputControlState.value,
      errors: inputControlState.errors,
      valid: inputControlState.valid,
      touched: inputControlState.touched,
      inputProps: {
        onChange: (e) => {
          dispatch({ type: control_change, value: e.target.value });
        },
        onBlur: (e) => {
          dispatch({ type: control_touched });
        },
        invalid: !inputControlState.valid && inputControlState.touched,
      },
    },
    dispatch,
  ];
};

export default useValidator;
