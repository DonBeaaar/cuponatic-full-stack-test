import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { getTotalProducts } from '../services/product';


const styles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    imgProduct: {
        height: 50,
        width: 70
    },
    table: {
        minWidth: 650,
    },
}));

const OrderData = () => {
    const classes = styles();

    const [productsShoppingCart, setProductsShoppingCart] = useState([]);

    const [totalAmmount, setTotalAmmount] = useState(0);

    

    useEffect(() => {
        handleListenLocalStorageUpdateShopping();
    }, [])

    const handleListenLocalStorageUpdateShopping = () => {
        const productsLocalStorage = JSON.parse(localStorage.getItem('products'))

        if (productsLocalStorage) {
            setProductsShoppingCart(productsLocalStorage);
            setTotalAmmount(getTotalProducts(productsLocalStorage))
        }
    }



    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="right">Precio</TableCell>
                        <TableCell align="right">Totales</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productsShoppingCart.map((product) => (
                        <TableRow key={product.id_descuento}>
                            <TableCell component="th" scope="row">
                                <Box display="flex" flexDirection="row" alignItems="center">
                                    <img className={classes.imgProduct} alt="img" src={product.imagen} />
                                    {product.titulo}
                                </Box>
                            </TableCell>
                            <TableCell align="right">{product.cantidad}</TableCell>
                            <TableCell align="right">{product.valor_oferta}</TableCell>
                            <TableCell align="right">${product.valor_oferta_plano * product.cantidad}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell align="right">{`Total a pagar: $${totalAmmount}`}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

export default OrderData
