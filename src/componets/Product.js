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

const Product = ({ product, handleUpdateShoppingCart }) => {
    const classes = useStyles();

    const {
        id_descuento,
        titulo,
        imagen,
        valor_oferta,
        calificaciones
    } = product;


    const handleAddProductShoppingCart = () => {

        const productsLocal = JSON.parse(localStorage.getItem('products'));

        if (!productsLocal) {
            localStorage.setItem('products', JSON.stringify([{ ...product, cantidad: 1 }]))
        } else {
            const productInLocal = productsLocal.find((product) => product.id_descuento === id_descuento);
            const cantidad = (productInLocal) ? productInLocal.cantidad + 1 : 1

            if (productInLocal) {
                localStorage.setItem('products', JSON.stringify(productsLocal.map((product) => product.id_descuento === id_descuento ? { ...product, cantidad } : product)))
            } else {
                localStorage.setItem('products', JSON.stringify([...productsLocal, { ...product, cantidad }]))
            }
        }

        handleUpdateShoppingCart()
    }

    return (
        <Grid item xs={12} lg={3}>
            <Card style={{ height: 400 }}>
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
                        <Button size="small" color="inherit" variant='contained' onClick={handleAddProductShoppingCart}>
                            Agregar
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product
