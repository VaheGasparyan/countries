import {Box, Skeleton} from "@mui/material";

import './loadingCss.css';

const SkeletonLoading = () => {
    return (
        <Box className='skeleton'>
            <Box className='flag'>
                <Skeleton variant="rectangular" sx={{borderRadius: '10px'}} width={500} height={300} />
            </Box>
            <Box className='info_skeleton'>
                <Box className='description_1'>
                    <Skeleton width="50%" height='70px' />
                    <Skeleton width="50%" />
                    <Skeleton width="50%" />
                    <Skeleton width="50%" />
                    <Skeleton width="50%" />
                    <Skeleton width="50%" />
                    <Skeleton width="50%" />
                </Box>
                <Box className='description_2'>
                    <Skeleton width="50%"/>
                    <Skeleton width="50%" />
                    <Skeleton width="50%" />
                    <Skeleton width="50%" />
                    <Skeleton width="50%" />
                </Box>
            </Box>
        </Box>
    );
};

export default SkeletonLoading;