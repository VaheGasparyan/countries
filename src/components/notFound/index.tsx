import {useAppSelector} from "store/app/hooks";

import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import {Box, Typography} from "@mui/material";

import './notFoundCss.css';

const NotFound = () => {
    const { error } = useAppSelector(state => state.countriesSlice);

    return (
        <Box className='not_found'>
            <Typography variant='h2'>
                {error} {<SyncProblemIcon fontSize='large' />}
            </Typography>
        </Box>
    );
};

export default NotFound;