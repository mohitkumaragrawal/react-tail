import ErrorLabel from "./ErrorLabel";

const ValidationError = (props) => {
  const errors = props.errors;
  let errorList = [];

  if (props.errors) {
    Object.entries(errors).forEach((err) => errorList.push(err[0]));
  }

  if (errorList.length === 0)
    return <ErrorLabel className="text-green-800">No errors</ErrorLabel>;
  return <ErrorLabel>{errors[errorList[0]]}</ErrorLabel>;
};

export default ValidationError;
