import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    media: {
        height: 140,
    },
    title: {
        marginBottom: '2%'
    }
});

const Product = ({
    titulo,
    imagen,
    valor_oferta,
    valor_oferta_plano,
    calificaciones
}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} lg={3}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={imagen}
                        title={titulo}
                    />
                    <CardContent>
                        <Typography variant="h5" className={classes.title}>
                            {titulo}
                        </Typography>
                        <Typography variant="subtitle1">
                            Precio: {valor_oferta}
                        </Typography>
                        <Typography variant="subtitle1">
                            Calificacion: {calificaciones}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box width={1} display="flex" flexDirection="row" justifyContent="center">
                        <Button size="small" color="inherit" variant='contained'>
                            Agregar
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product
