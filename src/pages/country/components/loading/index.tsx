import {Skeleton} from "@mui/material";

const SkeletonLoading = () => {
    return (
        <Skeleton variant="rectangular" sx={{borderRadius: '10px'}} width={500} height={300} />
    );
};

export default SkeletonLoading;