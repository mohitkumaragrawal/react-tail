/**
 * @param {{[controlName:string]:{value: string, errors: {[errorCode: string]: string}, valid: boolean, touched: boolean, inputProps: any}}} controls
 */
const createForm = (controls) => {
  let valid = true;
  let touched = true;
  let value = {};

  Object.keys(controls).forEach((controlName) => {
    valid &= controls[controlName].valid;
    touched &= controls[controlName].touched;
    value[controlName] = controls[controlName].value;
  });

  return { valid, touched, value };
};

export default createForm;
