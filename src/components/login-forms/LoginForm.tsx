import { Stack } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { NameField } from "./NameField";
import { PasswordField } from "./PasswordFiels";
import { SubmitButton } from "./SubmitButton";
import { useGetAuthTokenMutation } from "../../API/RTKQuery/api";
import useAuth from "../../auth/AuthProvider";

interface LoginFormData {
  values: {
    login: string;
    password: string;
  };
}

const initFormData: LoginFormData = {
  values: {
    login: "",
    password: "",
  },
};

export const LoginForm: React.FC = () => {
  const { logIn } = useAuth();
  const [getToken] = useGetAuthTokenMutation();
  const [loginFormData, setLoginFormData] = useState(initFormData);
  const [isErrorAuth, setErrorAuth] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const currentValue: string = event.currentTarget.value;
    const nameComponent: string = event.currentTarget.name;

    const newFormData: LoginFormData = {
      values: {
        login:
          nameComponent !== "login" ? loginFormData.values.login : currentValue,
        password:
          nameComponent !== "password"
            ? loginFormData.values.password
            : currentValue,
      },
    };
    setLoginFormData(newFormData);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    try {
      const { data } = await getToken(loginFormData.values);
      localStorage.setItem("userId", data.token);
      setErrorAuth(false);
      logIn();
    } catch (err) {
      setErrorAuth(true);
      toast.error("Ошибка! Попробуйте еще раз");
      throw err;
    }
  };

  return (
    <Stack
      component="form"
      sx={{ minWidth: "485px" }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <NameField
        value={loginFormData.values.login}
        onChange={handleChange}
        failAuth={isErrorAuth}
      />
      <PasswordField
        value={loginFormData.values.password}
        onChange={handleChange}
        failAuth={isErrorAuth}
      />
      <SubmitButton
        isDisabled={
          loginFormData.values.login === "" &&
          loginFormData.values.password === ""
        }
      />
    </Stack>
  );
};
