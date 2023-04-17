/// Redux
import {useAppSelector} from "store/app/hooks";


import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Fragment} from "react";

const DrawCountries = () => {
    const { countriesSlice: { countries } } = useAppSelector(state => state);
    const { v4: uuid } = require('uuid');

    console.log(countries[0]);

    return (
        <>
            {countries.map(country => {
                return (
                    <Card className='card' key={uuid()}>
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
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                )
            })}
        </>
    );
};

export default DrawCountries;