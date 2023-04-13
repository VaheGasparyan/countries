import {darkMode, lightMode, themeKey} from "config";
import {lightTheme, darkTheme} from "themeConfig";

export const getThemeInLocalStorage = () => {
    const theme = localStorage.getItem(themeKey);

    if(theme && theme === lightMode) {
        return lightTheme;
    } else if(theme && theme === darkMode) {
        return darkTheme;
    }

    return lightTheme;
}