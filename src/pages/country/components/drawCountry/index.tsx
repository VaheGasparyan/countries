import {useAppSelector} from "store/app/hooks";
import {Box, Typography, useTheme} from "@mui/material";
import { shadowsIndex } from "config";
import SkeletonLoading from "../loading";

const DrawCountry = () => {
    const { countries, status } = useAppSelector(state => state.countriesSlice);
    const [country] = countries;
    const { shadows } = useTheme();

    return (
        <Box className='wrapper'>
            <Box className='info'>
                <Box className='flag'>
                    {
                        status === 'loading' ? <SkeletonLoading /> : <img
                            style={{boxShadow: shadows[shadowsIndex.flags]}}
                            src={country?.flags.png}
                            alt={country?.flags.alt}/>
                    }
                </Box>

                <Box className='description'>
                    <Box className='country_info'>
                        <Box className='title'>
                            <Typography variant='h4'>
                                {country?.name.common}
                            </Typography>
                        </Box>

                        <Box className='subtitle_one'>
                            <Typography variant='subtitle1'>
                                Capital: {country?.capital}
                            </Typography>
                            <Typography variant='subtitle1'>
                                Population: {country?.population}
                            </Typography>
                            <Typography variant='subtitle1'>
                                Area: {country?.area}
                            </Typography>
                            <Typography variant='subtitle1'>
                                Independent: {country?.independent + ''}
                            </Typography>
                            <Typography variant='subtitle1'>
                                Region: {country?.region}
                            </Typography>
                        </Box>
                    </Box>

                    <Box className='subtitle_two'>
                        <Typography variant='subtitle1'>
                            Capital: {country?.capital}
                        </Typography>
                        <Typography variant='subtitle1'>
                            Population: {country?.population}
                        </Typography>
                        <Typography variant='subtitle1'>
                            Area: {country?.area}
                        </Typography>
                        <Typography variant='subtitle1'>
                            Independent: {country?.independent + ''}
                        </Typography>
                        <Typography variant='subtitle1'>
                            Region: {country?.region}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default DrawCountry;