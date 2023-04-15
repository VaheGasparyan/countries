import {useEffect, useState} from "react";

/// MUI
import {Box, useTheme} from "@mui/material";

/// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/// Config
import {shadowsIndex} from "config";

/// Utils
import {setClassName} from "utils/setClassName";

/// Css
import './drawSearchCss.css';

library.add(faSearch);
const DrawSearch = () => {
    const [active, setActive] = useState('');
    const { palette: { mode, secondary: { main, contrastText } }, shadows } = useTheme();

    useEffect(() => {
        setActive(setClassName(mode));
    }, [main])

    return (
        <Box className='wrapper'>
            <i className='icon'><FontAwesomeIcon icon="search" /></i>
            <input style={{background: main, color: contrastText, boxShadow: shadows[shadowsIndex.search]}} type="text" className={`searchInput ${active}`} placeholder='Search for a country...' />
        </Box>
    );
};

export default DrawSearch;