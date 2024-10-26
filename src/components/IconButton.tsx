import { IconButton, SxProps, Theme } from "@mui/material";

interface IconButtonProps {
  src: string;
  alt: string;
  onClickTable?: () => void;
  sx?: SxProps<Theme>;
}

export const ButtonIcon: React.FC<IconButtonProps> = ({
  src,
  alt,
  onClickTable,
  sx,
}) => {
  return (
    <IconButton onClick={onClickTable} sx={sx}>
      <img src={src} alt={alt} width="24" height="24" />
    </IconButton>
  );
};
