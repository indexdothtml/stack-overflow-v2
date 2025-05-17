import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { FormContainer, Button } from "../components/common/index";

export default function ResetPasswordInit() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <FormContainer
      submitHandler={handleSubmit}
      submittedFrom="resetPasswordInit"
    >
      <h1>Please verify your email address</h1>
      <TextField
        variant="outlined"
        id="id_email"
        label="Email"
        type="email"
        {...register("email", { required: true })}
      />

      <Button
        buttonType="submit"
        buttonText="Verify"
        disable={isSubmitting}
        className="w-52"
      />
    </FormContainer>
  );
}
