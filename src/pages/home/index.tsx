import {createContext, useEffect, useState} from "react";

/// Redux
import {useAppDispatch, useAppSelector} from "store/app/hooks";
import {fetchCountries} from "store/features/countriesSlice";

/// Services
import { getAllCountriesURL } from "services/apiUrl";

/// Interface
import {ISelectValue} from "interfaces/selectInterface";

/// My Components
import Header from 'components/header';
import Search from "components/search";
import Select from "components/select";
import Countries from "components/countries";
import Loading from "components/loading";
import NotFound from "components/notFound";

/// MUI
import {Box, Container, useTheme} from "@mui/material";

/// Css
import './homeCss.css';

export const SelectValueContext = createContext<ISelectValue>({
    changeSelectValue: (value) => {},
    selectValue: ''
});


const HomePage = () => {
    const { status, error } = useAppSelector(state => state.countriesSlice);
    const dispatch = useAppDispatch();
    const { palette: { primary: { main } } } = useTheme();
    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        dispatch(fetchCountries(getAllCountriesURL()));
    }, []);

    const changeSelectValue = (value: string) => {
        setSelectValue(value);
    }

    return (
        <Box className='home' sx={{width: '100%', background: main}}>
            <Header />

            {error ? <NotFound /> : <><Container maxWidth='xl' className='inpSelect'>
                <SelectValueContext.Provider value={{
                    changeSelectValue,
                    selectValue
                }}>
                    <Search />
                    <Select />
                </SelectValueContext.Provider>
            </Container>

                {status === 'loading' ? <Loading /> : <Countries />}</>}
        </Box>
    );
};

export default HomePage;