import {ITheme} from "interfaces/theme";
import {createTheme} from "@mui/material";

export const lightMode: ITheme = createTheme({
    palette: {
        mode: 'light',
    }
});

export const darkMode: ITheme = createTheme({
    palette: {
        mode: 'dark',
    }
});