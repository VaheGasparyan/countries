import {useNavigate} from "react-router-dom";

import {Button, useTheme} from "@mui/material";
import {shadowsIndex} from "config";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const BackButton = () => {
    const { palette: { secondary: { main } }, shadows } = useTheme();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    }

    return (
        <Button onClick={handleClick} sx={{background: main, boxShadow: shadowsIndex.buttonsShadow}} variant="contained">
           <KeyboardBackspaceIcon sx={{marginRight: '10px'}}/> Back
        </Button>
    );
};

export default BackButton;