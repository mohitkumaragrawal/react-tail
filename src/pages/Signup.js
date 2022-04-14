import Card from "../components/Card";
import CardHeader from "../components/CardHeader";
import FullCenter from "../components/FullCenter";
import InputControl from "../components/InputControl";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useId } from "react";

const Signup = () => {
  const id = useId();

  return (
    <FullCenter>
      <Card className="px-5">
        <CardHeader>Signup</CardHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-5">
          <InputControl name="first name" id={id + "firstName"} />
          <InputControl name="last name" id={id + "lastName"} />
          <InputControl name="email" type="email" id={id + "email"} />
          <InputControl name="username" id={id + "username"} />
          <InputControl
            name="password"
            type="password"
            className="sm:col-span-2"
            id={id + "password"}
          />
        </div>

        <Button className="my-4 uppercase tracking-widest">Signup</Button>
      </Card>
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
