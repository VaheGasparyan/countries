import {Button, useTheme} from "@mui/material";
import {shadowsIndex} from "config";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const BackButton = () => {
    const { palette: { secondary: { main } }, shadows } = useTheme();

    return (
        <Button sx={{background: main, boxShadow: shadowsIndex.buttonsShadow}} variant="contained">
           <KeyboardBackspaceIcon sx={{marginRight: '10px'}}/> Back
        </Button>
    );
};

export default BackButton;