import { SyntheticEvent } from 'react';

/// Redux
import {useAppSelector} from "store/app/hooks";

/// Config
import { shadowsIndex } from "config";

/// MUI
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, useTheme} from "@mui/material";

const DrawCountries = () => {
    const { countries } = useAppSelector(state => state.countriesSlice);
    const { v4: uuid } = require('uuid');
    const { palette: { secondary: { main } }, shadows } = useTheme();

    const handleClick = (event: SyntheticEvent<HTMLButtonElement, Event>) => {
        console.log(event.currentTarget.id);
    }


    return (
        <>
            {countries.map(country => {
                return (
                    <Card sx={{background: main, boxShadow: shadows[shadowsIndex.card]}} className='card' key={uuid()}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={country.flags.png}
                                alt={country.flags.alt}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {country.name.common}
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Population: {country.population}
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Region: {country.region}
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Capital: {country.capital}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{marginBottom: '5px'}}>
                            <Button id={country.name.common} sx={{color: '#7dadd4', fontWeight: 'bold' }} onClick={handleClick}>Show more</Button>
                        </CardActions>
                    </Card>
                )
            })}
        </>
    );
};

export default DrawCountries;