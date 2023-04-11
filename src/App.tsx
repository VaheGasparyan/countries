import {useState} from "react"

/// Utils
import {getThemeInLocalStorage} from "./utils/getThemeInLocalStorage";

/// Theme interface
import {ITheme} from "./interfaces/theme";

/// My Components
import HomePage from "pages/home";

/// MUI
import {Box, CssBaseline, ThemeProvider} from "@mui/material";

const App = () => {
    const [currentTheme, setCurrentTheme] = useState<ITheme>(getThemeInLocalStorage());

    return (
    <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Box className="App">
            <HomePage />
        </Box>
    </ThemeProvider>
  );
}

export default App;
