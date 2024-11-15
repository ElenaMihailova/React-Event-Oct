import { useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PropsField {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  failAuth: boolean;
}

export const PasswordField = ({ value, onChange, failAuth }: PropsField) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ m: 2, marginLeft: 0, maxWidth: "485px" }} variant="outlined">
      <InputLabel htmlFor="password">Пароль</InputLabel>
      <OutlinedInput
        id="password"
        name="password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "hide the password" : "display the password"
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        placeholder="Введите пароль"
        value={value}
        onChange={onChange}
      />
      <FormHelperText id="errorPassword" error>
        {failAuth && "Введите корректный пароль"}
      </FormHelperText>
    </FormControl>
  );
};
