export interface ITheme {
    palette: {
        mode: string;
        primary: {
            main: string
        },
        secondary: {
            main: string;
            contrastText: string
        }
    }
}

export interface IThemeContext {
    changeTheme: () => void;
    theme: string;
}