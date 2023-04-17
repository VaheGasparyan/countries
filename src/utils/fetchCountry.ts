export const fetchCountry = async (URL: string) => {
    const res = await fetch(URL);
    return res;
};