import {themeKey, lightMode, darkMode} from "config";
import {darkTheme, lightTheme} from "themeConfig";

export const setTheme = () => {
    const theme = localStorage.getItem(themeKey);

    if(theme && theme === lightMode) {
        localStorage.setItem(themeKey, darkMode);
        return darkTheme;
    }

    localStorage.setItem(themeKey, lightMode);
    return lightTheme;
}