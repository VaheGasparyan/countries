import {useState} from "react";

/// Redux
import {useAppDispatch} from "store/app/hooks";
import {fetchCountries} from "store/features/countriesSlice";

/// Config
import {getCountriesByRegion, shadowsIndex} from "config";

/// MUI
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, useTheme} from "@mui/material";

///Css
import './drawSelect.css';

const DrawSelect = () => {
    const [selectValue, setSelectValue] = useState('');
    const { palette: {secondary: { main }}, shadows } = useTheme();
    const dispatch = useAppDispatch();

    const handleChange = (event: SelectChangeEvent) => {
        const {value} = event.target;
        setSelectValue(value);
        dispatch(fetchCountries(getCountriesByRegion(value)));
    }

    return (
        <FormControl className='formControl' sx={{background: main, boxShadow: shadows[shadowsIndex.searchAndSelect]}}>
            <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectValue}
                label="Filter by Region"
                onChange={handleChange}
            >
                <MenuItem value=''>All</MenuItem>
                <MenuItem value='America'>America</MenuItem>
                <MenuItem value='Europe'>Europe</MenuItem>
                <MenuItem value='Oceania'>Oceania</MenuItem>
                <MenuItem value='Asia'>Asia</MenuItem>
                <MenuItem value='Africa'>Africa</MenuItem>
            </Select>
        </FormControl>
    );
};

export default DrawSelect;