import { IconButton } from '@mui/material';

interface IconButtonProps {
    src: string;
    alt: string;
}

export const ButtonIcon: React.FC<IconButtonProps> = ({ src, alt }) => {
    return (
        <IconButton>
            <img src={src} alt={alt} width="24" height="24" />
        </IconButton>
    )
}