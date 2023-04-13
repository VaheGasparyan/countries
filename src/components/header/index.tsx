import {useContext} from "react";
import { ThemeContext } from "App";

/// Config
import {lightMode, themeKey, shadowsIndex} from "config";

/// MUI
import {Box, Container, Typography, useTheme} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness5';

/// Css
import './headerCss.css';

const Header = () => {
    const { palette: { secondary: { main } }, shadows } = useTheme();
    const { changeTheme, theme } = useContext(ThemeContext);

    return (
        <Box className='header' sx={{background: main, boxShadow: shadows[shadowsIndex.header]}} >
            <Container className='container' maxWidth='xl'>
                <Box className='title'>
                    <Typography variant='h4' className='header_title'>
                        Where in the world ?
                    </Typography>
                </Box>
                <Box className='theme_btn' onClick={changeTheme} >
                    {theme === lightMode ? <Brightness4Icon fontSize='large'/> : <Brightness5Icon fontSize='large' />}
                </Box>
            </Container>
        </Box>
    );
};

export default Header;