import Card from "../components/Card";
import CardHeader from "../components/CardHeader";
import FullCenter from "../components/FullCenter";
import InputControl from "../components/InputControl";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useId } from "react";
import useValidator from "../hooks/useValidator";
import {
  emailValidator,
  minWidth,
  passwordValidator,
  required,
} from "../validators";
import ValidationError from "../components/ValidationError";
import createForm from "../helper/createForm";

const Signup = () => {
  const id = useId();

  const [firstNameControl] = useValidator(required);
  const [lastNameControl] = useValidator(required);
  const [emailControl] = useValidator(emailValidator);
  const [usernameControl] = useValidator(minWidth(5));
  const [passwordControl] = useValidator(passwordValidator);

  const form = createForm({
    firstName: firstNameControl,
    lastName: lastNameControl,
    email: emailControl,
    username: usernameControl,
    password: passwordControl,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form.value);
  };

  return (
    <FullCenter>
      <form onSubmit={handleSubmit}>
        <Card className="px-5">
          <CardHeader>Signup</CardHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-5">
            <InputControl
              name="first name"
              id={id + "firstName"}
              {...firstNameControl.inputProps}
            >
              <ValidationError errors={firstNameControl.errors} />
            </InputControl>

            <InputControl
              name="last name"
              id={id + "lastName"}
              {...lastNameControl.inputProps}
            >
              <ValidationError errors={lastNameControl.errors} />
            </InputControl>

            <InputControl
              name="email"
              type="email"
              id={id + "email"}
              {...emailControl.inputProps}
            >
              <ValidationError errors={emailControl.errors} />
            </InputControl>

            <InputControl
              name="username"
              id={id + "username"}
              {...usernameControl.inputProps}
            >
              <ValidationError errors={usernameControl.errors} />
            </InputControl>

            <InputControl
              name="password"
              type="password"
              className="sm:col-span-2"
              id={id + "password"}
              {...passwordControl.inputProps}
            >
              <ValidationError errors={passwordControl.errors} />
            </InputControl>
          </div>

          <Button
            className="my-4 uppercase tracking-widest"
            disabled={!form.valid}
            type="submit"
          >
            Signup
          </Button>
        </Card>
      </form>
      <p>
        Already have and account?{" "}
        <Link to="/login" className="font-semibold border-b-2 border-teal-800">
          Skip to Login
        </Link>
      </p>
    </FullCenter>
  );
};

export default Signup;
