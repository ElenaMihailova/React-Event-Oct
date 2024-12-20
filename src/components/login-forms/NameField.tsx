import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";

interface PropsField {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  failAuth: boolean;
}

export const NameField = ({ value, onChange, failAuth }: PropsField) => {
  return (
    <FormControl
      sx={{ m: 2, marginLeft: 0, maxWidth: "485px" }}
      variant="outlined"
    >
      <InputLabel htmlFor="login">Логин</InputLabel>
      <OutlinedInput
        id="login"
        name="login"
        label="Логин"
        placeholder="Введите e-mail"
        autoFocus
        value={value}
        onChange={onChange}
      />
      <FormHelperText id="errorLogin" error>
        {failAuth && "Введите корректный email-адрес"}
      </FormHelperText>
    </FormControl>
  );
};
