import {Box, Typography} from "@mui/material";

import './loadingCss.css';

const Loading = () => {
    return (
        <Box className='loading'>
            <Typography variant='h4'>
                Loading...
            </Typography>
        </Box>
    );
};

export default Loading;