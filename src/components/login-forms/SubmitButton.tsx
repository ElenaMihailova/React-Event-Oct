import { Button } from "@mui/material";

interface SubmitButtonProps {
  isDisabled: boolean;
}

export const SubmitButton = ({ isDisabled }: SubmitButtonProps) => {
  return (
    <Button
      variant="contained"
      type="submit"
      sx={{
        margin: "16px 16px 16px 0",
        padding: "8px 16px",
        maxWidth: "485px",
      }}
      disabled={isDisabled}
    >
      Войти
    </Button>
  );
};
