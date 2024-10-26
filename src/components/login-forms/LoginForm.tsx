import { useFormik } from "formik";
import { Stack } from "@mui/material";
import { NameField } from "./NameField";
import { PasswordField } from "./PasswordFiels";
import { SubmitButton } from "./SubmitButton";
import { useGetAuthTokenMutation } from "../../API/RTKQuery/api";

export const LoginForm: React.FC = () => {
  const [getToken] = useGetAuthTokenMutation();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const { data } = await getToken(values);
        localStorage.setItem("userId", data.token);
        localStorage.setItem("userName", data.username);
        console.log(data);
        console.log(localStorage.getItem("userId"));
        // setFailAuth(false);
        // logIn();
        // navigate('/');
      } catch (err) {
        // setFailAuth(true);
        // toast.error(t('toastify.error.connectionErr'));
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
      <NameField value={formik.values.login} onChange={formik.handleChange} />
      <PasswordField
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <SubmitButton isDisabled={!formik.isValid || !formik.dirty} />
    </Stack>
  );
};
