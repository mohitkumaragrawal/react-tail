import ErrorLabel from "./ErrorLabel";

const ValidationError = (props) => {
  const errors = props.errors;
  let errorList = [];
  Object.entries(errors).forEach((err) => errorList.push(err[0]));

  if (errorList.length === 0) return <></>;
  if (errorList.length === 1)
    return <ErrorLabel>{errors[errorList[0]]}</ErrorLabel>;

  return (
    <ul>
      {errorList.map((err) => (
        <li key={err}>
          <ErrorLabel>{errors[err]}</ErrorLabel>
        </li>
      ))}
    </ul>
  );
};

export default ValidationError;
