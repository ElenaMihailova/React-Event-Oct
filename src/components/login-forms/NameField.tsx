import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

interface PropsField {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NameField = ({ value, onChange }: PropsField) => {
  return (
    <FormControl sx={{ m: 2, marginLeft: 0 }} variant="outlined">
      <InputLabel htmlFor="password">Логин</InputLabel>
      <OutlinedInput
        id="username"
        name="username"
        label="Логин"
        placeholder="Введите e-mail"
        autoFocus
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};
