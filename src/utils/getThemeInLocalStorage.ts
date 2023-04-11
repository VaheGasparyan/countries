import {lightTheme, themKey} from "config";
import {darkMode, lightMode} from "themeConfig";

export const getThemeInLocalStorage = () => {
    const theme = localStorage.getItem(themKey);

    if(theme && theme === lightTheme) {
        return lightMode;
    } else {
        return darkMode;
    }
}