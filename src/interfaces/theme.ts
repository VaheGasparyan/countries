export interface ITheme {
    palette: {
        mode: string;
        primary: {
            main: string
        },
        secondary: {
            main: string
        }
    }
}

export interface IThemeContext {
    changeTheme: () => void;
    theme: string;
}