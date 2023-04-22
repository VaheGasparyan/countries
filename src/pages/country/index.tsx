import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "store/app/hooks";
import {getCountriesAtNameURL} from "services/apiUrl";
import {fetchCountries} from "store/features/countriesSlice";

import Header from "components/header";
import DrawCountry from "./components/drawCountry";
import BackButton from "./components/backButton";

import {Box, Container, useTheme} from "@mui/material";

import './countryCss.css';

const Country = () => {
    const dispatch = useAppDispatch();
    const { countryName } = useParams();
    const { palette: { primary: { main } } } = useTheme();

    useEffect(() => {
        dispatch(fetchCountries(getCountriesAtNameURL(countryName as string)))
    }, [])

    return (
        <Box sx={{ background: main }} className='country'>
            <Header />

            <Box>
                <Container maxWidth='xl' className='container'>
                    <Box className='btn' sx={{marginTop: '50px'}}>
                        <BackButton />
                    </Box>

                    <Box className='info' >
                        <DrawCountry />
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Country;