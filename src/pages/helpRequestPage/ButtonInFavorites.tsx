import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import starEmpty from "./assets/star-empty.svg";
import starFilled from "./assets/star-filled.svg";

interface ButtonInFavorites extends PropsWithChildren {
  filled: boolean;
  onClick: () => void;
}

const ButtonInFavorites = ({
  filled = false,
  onClick,
  children,
}: ButtonInFavorites) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        height: "fit-content",
        width: "fit-content",
        border: "solid 1px #0000001F",
        borderRadius: "4px",
        paddingY: "4px",
        paddingX: "10px",
        textWrap: "nowrap",
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      {filled ? (
        <img src={starFilled} alt="favorite" />
      ) : (
        <img src={starEmpty} alt="favorite" />
      )}
      <Typography fontSize={14}>{children}</Typography>
    </Box>
  );
};

export default ButtonInFavorites;
