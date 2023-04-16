import {useState} from "react";

/// Config
import {shadowsIndex} from "config";

/// MUI
import {FormControl, InputLabel, MenuItem, Select, useTheme} from "@mui/material";

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
        <FormControl sx={{ background: main, color: contrastText, boxShadow: shadows[shadowsIndex.searchAndSelect] }} className='formControl'>
            <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Filter by Region"
                value={selectValue}
                onChange={handleChange}
            >
                <MenuItem value='Africa'>Africa</MenuItem>
                <MenuItem value='America'>America</MenuItem>
                <MenuItem value='Asia'>Asia</MenuItem>
                <MenuItem value='Europe'>Europe</MenuItem>
                <MenuItem value='Oceania'>Oceania</MenuItem>
            </Select>
        </FormControl>
    );
};

export default DrawSelect;