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
    const { palette: { primary: { main } } } = useTheme();

    return (
        <Box className='home' sx={{height: '100vh', width: '100%', background: main}}>
            <Header />

            <Container maxWidth='xl' className='inpSelect'>
                <Search />
                <Select />
                <Countries />
            </Container>
        </Box>
    );
};

export default HomePage;