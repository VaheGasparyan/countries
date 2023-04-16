/// My components
import DrawSelect from "./components/drawSelect";

/// MUI
import {Box} from "@mui/material";

const Select = () => {
    return (
        <Box className='select_wrapper'>
            <DrawSelect />
        </Box>
    );
};

export default Select;