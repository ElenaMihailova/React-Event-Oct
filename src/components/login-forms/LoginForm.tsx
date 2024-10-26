import { useFormik } from "formik";
import { Stack } from "@mui/material";
import { NameField } from "./NameField";
import { PasswordField } from "./PasswordFiels";
import { SubmitButton } from "./SubmitButton";

export const LoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Stack
      component="form"
      sx={{ minWidth: "485px" }}
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <NameField
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      <PasswordField
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <SubmitButton isDisabled={!formik.isValid || !formik.dirty} />
    </Stack>
  );
};
