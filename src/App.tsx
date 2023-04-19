import {useState, createContext} from "react";

/// Routing
import { Routes, Route } from "react-router-dom";

/// Config
import {themeKey} from "config";

/// interface
import {IThemeContext} from "interfaces/theme";

/// Utils
import {getThemeInLocalStorage} from "./utils/getThemeInLocalStorage";
import {setTheme} from "utils/setTheme";

/// My Components
import HomePage from "pages/home";
import Country from "./pages/country";

/// MUI
import {Box, CssBaseline, ThemeProvider} from "@mui/material";

/// Css
import './App.css';


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
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='country/:countryName' element={<Country />} />
                    </Routes>
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
  );
}

export default App;
