import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#fff'
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#222e37',
        },
        secondary: {
            main: '#2b3742'
        },
    },
});

export { lightTheme, darkTheme };