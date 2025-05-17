import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FormContainer, Button } from "../components/common/index";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <FormContainer submitHandler={handleSubmit} submittedFrom="login">
      <TextField
        variant="outlined"
        id="id_email"
        label="Email"
        type="email"
        {...register("email", { required: true })}
      />

      <div>
        <p className="text-xs flex justify-end mb-1 text-blue-400">
          <Link to="/resetPassword/init">forgot password?</Link>
        </p>
        <TextField
          variant="outlined"
          id="id_password"
          label="Password"
          type="password"
          {...register("password", { required: true })}
        />
      </div>

      <Button
        buttonType="submit"
        buttonText="Login"
        className="w-52"
        disable={isSubmitting}
      />

      <p className="text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-400">
          Sign up
        </Link>
      </p>
    </FormContainer>
  );
}
