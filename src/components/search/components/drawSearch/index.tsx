import {ChangeEvent, useContext, useEffect, useState} from "react";
import {SelectValueContext} from "pages/home";

import {useAppDispatch} from "store/app/hooks";
import {fetchCountries} from "store/features/countriesSlice";

/// Services
import {getCountriesAtNameURL} from "services/apiUrl";

import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";

/// MUI
import {Box, Container, useTheme} from "@mui/material";

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
    const dispatch = useAppDispatch();
    const { palette: { mode, secondary: { main, contrastText } }, shadows } = useTheme();
    const { selectValue } = useContext(SelectValueContext);
    let timeOutId : TimeoutId;

    useEffect(() => {
        setActive(setClassName(mode));
    }, [main]);

    const handleChange= (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        clearTimeout(timeOutId);

        timeOutId = setTimeout(() => {
            dispatch(fetchCountries(getCountriesAtNameURL(value, selectValue)));
        }, 500);
    };

    return (
        <Box className='wrapper'>
            <i className='icon'><FontAwesomeIcon icon="search" /></i>
            <input onChange={handleChange} style={{background: main, color: contrastText, boxShadow: shadows[shadowsIndex.searchAndSelect]}} type="text" className={`searchInput ${active}`} placeholder='Search for a country...' />
        </Box>
    );
};

export default DrawSearch;