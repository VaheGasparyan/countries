/// MUI
import {Box, Container, Typography} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';

/// Css
import './headerCss.css';

const Header = () => {
    return (
        <Box className='header'>
            <Container className='container' maxWidth='xl'>
                <Box className='title'>
                    <Typography variant='h4' className='header_title'>
                        Where in the world?
                    </Typography>
                </Box>
                <Box className='them_btn'>
                    <Brightness4Icon fontSize='large'/>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;