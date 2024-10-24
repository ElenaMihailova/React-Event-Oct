import { Container } from "@mui/material";
import CustomButton from "../components/Button";

export const WelcomePage = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <Container maxWidth="sm">
      Here we'll write something beautiful, concise, productive.
      <CustomButton label="Click Me" onClick={handleClick} />
    </Container>
  );
};
