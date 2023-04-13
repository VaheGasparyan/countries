import {useState, createContext} from "react";

import {themeKey} from "config";

/// Utils
import {getThemeInLocalStorage} from "./utils/getThemeInLocalStorage";
import {setTheme} from "utils/setTheme";

/// My Components
import HomePage from "pages/home";

/// MUI
import {Box, CssBaseline, ThemeProvider} from "@mui/material";

/// Css
import './App.css';

interface IThemeContext {
    changeTheme: () => void;
    theme: string;
}

export const ThemeContext = createContext<IThemeContext>({
    changeTheme: () => {},
    theme: ''
});

const App = () => {
    const [currentTheme, setCurrentTheme] = useState(getThemeInLocalStorage());

    const changeTheme = () => {
        const theme = setTheme();
        setCurrentTheme(theme);
    }

    return (
        <ThemeContext.Provider value={{
            changeTheme,
            theme: localStorage.getItem(themeKey) as string
        }}>
            <ThemeProvider theme={currentTheme}>
                <CssBaseline />
                <Box className="App">
                    <HomePage />
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
  );
}

export default App;
