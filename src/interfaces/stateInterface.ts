export interface IInitialState {
    status: string;
    error: string | null;
    countries: ICountries[]
}

export interface ICountries extends Record<string, any> {}