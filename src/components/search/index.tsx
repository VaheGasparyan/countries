/// My Componenets
import DrawSearch from "./components/drawSearch";

/// MUI
import {Box, Container} from "@mui/material";

const Search = () => {
    return (
        <Box className='search'>
            <Container maxWidth='xl' className='container'>
                <DrawSearch />
            </Container>
        </Box>
    );
};

export default Search;