import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FormContainer, Button } from "../components/common/index";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <FormContainer submitHandler={handleSubmit} submittedFrom="signup">
      <TextField
        variant="outlined"
        id="id_name"
        label="Name"
        type="text"
        {...register("name", { required: true })}
      />

      <TextField
        variant="outlined"
        id="id_email"
        label="Email"
        type="email"
        {...register("email", { required: true })}
      />

      <TextField
        variant="outlined"
        id="id_password"
        label="Password"
        type="password"
        {...register("password", { required: true })}
      />

      <Button
        buttonType="submit"
        buttonText="Signup"
        disable={isSubmitting}
        className="w-52"
      />

      <p className="text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-400">
          Login
        </Link>
      </p>
    </FormContainer>
  );
}
