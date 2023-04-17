const BASE_URL = 'https://restcountries.com/v3.1/';

const getAllCountriesURL = () => {
    return BASE_URL + 'all';
}

const getCountriesAtNameURL = (countryName: string) => {
    return BASE_URL + `name/${countryName}`;
}

const getCountriesByRegion = (region: string) => {
    if(region) {
        return BASE_URL + `region/${region}`;
    }

    return getAllCountriesURL();
}

const themeKey = 'theme';
const lightMode = 'lightMode';
const darkMode = 'darkMode';
const shadowsIndex = {
    header: 3,
    searchAndSelect: 3,
    card: 5
};

export { themeKey, darkMode, lightMode, shadowsIndex, BASE_URL, getAllCountriesURL, getCountriesAtNameURL, getCountriesByRegion }