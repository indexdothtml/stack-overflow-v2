import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { FormContainer, Button } from "../components/common/index";

export default function ResetPasswordConfirm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <FormContainer
      submitHandler={handleSubmit}
      submittedFrom="resetPasswordConfirm"
    >
      <TextField
        variant="outlined"
        id="id_password"
        label="New Password"
        type="password"
        {...register("password", { required: true })}
      />

      <Button
        buttonType="submit"
        buttonText="Reset"
        disable={isSubmitting}
        className="w-52"
      />
    </FormContainer>
  );
}
