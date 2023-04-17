import {useEffect} from "react";

/// Redux
import {useAppDispatch} from "store/app/hooks";
import {fetchCountries} from "store/features/countriesSlice";

/// Config
import {getAllCountriesURL} from "config";

/// My Components
import Header from 'components/header';
import Search from "components/search";
import Select from "components/select";
import Countries from "components/countries";

/// MUI
import {Box, Container, useTheme} from "@mui/material";

/// Css
import './homeCss.css';


const HomePage = () => {
    const dispatch = useAppDispatch();
    const { palette: { primary: { main } } } = useTheme();

    useEffect(() => {
        dispatch(fetchCountries(getAllCountriesURL()));
    }, [])

    return (
        <Box className='home' sx={{width: '100%', background: main}}>
            <Header />

            <Container maxWidth='xl' className='inpSelect'>
                <Search />
                <Select />
            </Container>

            <Countries />
        </Box>
    );
};

export default HomePage;