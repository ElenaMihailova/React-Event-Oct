import { useFormik } from "formik";
import { Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { NameField } from "./NameField";
import { PasswordField } from "./PasswordFiels";
import { SubmitButton } from "./SubmitButton";
import { useGetAuthTokenMutation } from "../../API/RTKQuery/api";
import useAuth from "../../auth/hook";

export const LoginForm: React.FC = () => {
  const [failAuth, setFailAuth] = useState(false);

  const { logIn } = useAuth();

  const [getToken] = useGetAuthTokenMutation();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const { data } = await getToken(values);

        if (data) {
          localStorage.setItem("userId", data.token);
        }

        setFailAuth(false);
        logIn();
        navigate("/catalog");
      } catch (err) {
        setFailAuth(true);
        toast.error("Ошибка! Попробуйте еще раз");
        throw err;
      }
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
        value={formik.values.login}
        onChange={formik.handleChange}
        failAuth={failAuth}
      />
      <PasswordField
        value={formik.values.password}
        onChange={formik.handleChange}
        failAuth={failAuth}
      />
      <SubmitButton isDisabled={!formik.isValid || !formik.dirty} />
    </Stack>
  );
};
