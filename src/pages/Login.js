import { Link } from "react-router-dom";
import { useEffect, useId, useRef, useState } from "react";

import Card from "../components/Card";
import CardHeader from "../components/CardHeader";
import FullCenter from "../components/FullCenter";
import InputControl from "../components/InputControl";
import Button from "../components/Button";
import ErrorLabel from "../components/ErrorLabel";

import { required, passwordValidator } from "../validators";
import useValidator from "../hooks/useValidator";

const Login = () => {
  const id = useId();

  const [userNameControl] = useValidator(required);
  const [passwordControl] = useValidator(passwordValidator);

  return (
    <FullCenter>
      <Card className="px-5 sm:w-96">
        <CardHeader>Login</CardHeader>

        <div className="grid gap-6 my-5">
          <InputControl
            name="username"
            type="text"
            id={id + "username"}
            {...userNameControl.inputProps}
          >
            <ErrorLabel>This field is requried *</ErrorLabel>
          </InputControl>
          <InputControl
            name="password"
            type="password"
            id={id + "password"}
            {...passwordControl.inputProps}
          >
            <ErrorLabel>Please enter a valid password</ErrorLabel>
          </InputControl>
        </div>

        <Button className="my-4 uppercase tracking-widest">Login</Button>
      </Card>
      <p>
        Not have an account?{" "}
        <Link to="/signup" className="font-semibold border-b-2 border-teal-800">
          Skip to Signup
        </Link>
      </p>
    </FullCenter>
  );
};

export default Login;
