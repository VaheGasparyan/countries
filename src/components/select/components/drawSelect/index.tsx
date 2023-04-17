import {useState} from "react";

/// Config
import {shadowsIndex} from "config";

/// MUI
import {MenuItem, SelectChangeEvent, TextField, useTheme} from "@mui/material";

///Css
import './drawSelect.css';

const DrawSelect = () => {
    const [selectValue, setSelectValue] = useState('');
    const { palette: {secondary: { main, contrastText }}, shadows } = useTheme();

    const handleChange = (event: any) => {
        const {value} = event.target;
        setSelectValue(value);
    }

    return (
        <TextField className='select' sx={{background: main, boxShadow: shadows[shadowsIndex.searchAndSelect]}} label='Filter by Region' value={selectValue} onChange={handleChange} select>
            <MenuItem value='Africa' >Africa</MenuItem>
            <MenuItem value='America' >America</MenuItem>
            <MenuItem value='Europe' >Europe</MenuItem>
            <MenuItem value='Aia' >Aia</MenuItem>
            <MenuItem value='Oceania' >Oceania</MenuItem>
        </TextField>
    );
};

export default DrawSelect;