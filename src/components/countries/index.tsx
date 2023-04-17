/// Countries components
import DrawCountries from "./components/drawCountries";

/// MUI
import {Box, Container} from "@mui/material";

/// Css
import './countriesCss.css';

const Countries = () => {
    return (
        <Box className='countries'>
            <Container maxWidth='xl' className='card_container'>
                <DrawCountries />
            </Container>
        </Box>
    );
};

export default Countries;