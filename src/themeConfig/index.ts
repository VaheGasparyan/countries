import { createTheme } from "@mui/material";
import {ITheme} from "interfaces/theme";

const lightTheme: ITheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#f4f4f4',
        },
        secondary: {
            main: '#fff',
            contrastText: '#000'
        },
    },
});

const darkTheme: ITheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#222e37',
        },
        secondary: {
            main: '#2b3742',
            contrastText: '#fff'
        },
    },
});

export { lightTheme, darkTheme };