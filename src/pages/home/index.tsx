/// My Components
import Header from 'components/header';
import Search from "components/search";

/// MUI
import {Box, useTheme} from "@mui/material";

/// Css
import './homeCss.css';

const HomePage = () => {
    const { palette: { primary: { main } } } = useTheme();

    return (
        <Box className='home' sx={{height: '100vh', width: '100%', background: main}}>
            <Header />
            <Search />
        </Box>
    );
};

export default HomePage;