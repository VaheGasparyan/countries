const BASE_URL = 'https://restcountries.com/v3.1/';
const all =  'all';
const name = 'name';
const region = 'region'

const getAllCountriesURL = () => {
    return BASE_URL + all;
}

const getCountriesAtNameURL = (countryName: string, selectValue: string) => {
    if(countryName) {
        return BASE_URL + `${name}/${countryName}`;
    } else if(selectValue) {
        return getCountriesByRegion(selectValue);
    }

    return getAllCountriesURL();
}

const getCountriesByRegion = (path: string) => {
    if(path) {
        return BASE_URL + `${region}/${path}`;
    }

    return getAllCountriesURL();
}

export { getAllCountriesURL, getCountriesByRegion, getCountriesAtNameURL, all }