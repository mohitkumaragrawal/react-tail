const ErrorLabel = (props) => {
  return (
    <p
      className={`text-xs text-red-700 font-semibold first-letter:uppercase ${props.className}`}
    >
      {props.children}
    </p>
  );
};

export default ErrorLabel;
