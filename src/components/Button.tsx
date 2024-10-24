
import Button from '@mui/material/Button';

interface CustomButtonProps {
    label: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
    return (
        <Button variant="contained" color="primary" onClick={onClick}>
            {label}
        </Button>
    );
};

export default CustomButton;
