import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Product from '../componets/Product'
import Pagination from '@material-ui/lab/Pagination';
import { startGetProducts } from '../services/product';
import { useHistory } from 'react-router-dom';

const styles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(5),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    filterContainer: {
        margin: theme.spacing(2)
    },
    resumeItem: {
        marginTop: theme.spacing(1)
    }
}));

const ProductList = () => {

    const classes = styles();

    const [products, setProducts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [lastPagePagination, setLastPagePagination] = useState(0);

    const [productsShoppingCart, setProductsShoppingCart] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data, lastPage } = await startGetProducts(currentPage);
            setProducts(data)
            setLastPagePagination(lastPage)
        }

        fetchData();
    }, [currentPage]);

    useEffect(() => {
        handleListenLocalStorageUpdateShopping()
    }, []);

    const history = useHistory();


    const handleListenLocalStorageUpdateShopping = () => {
        const productsLocalStorage = JSON.parse(localStorage.getItem('products'))
        setProductsShoppingCart(productsLocalStorage);
    }

    const handleDeleteProductShoppingCart = (id_descuento) => {
        const newProducts = JSON.parse(localStorage.getItem('products')).filter((product) => product.id_descuento !== id_descuento);
        localStorage.setItem('products', JSON.stringify(newProducts));
        handleListenLocalStorageUpdateShopping();

    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={8}>
                    <Grid container spacing={1}>
                        {
                            products.map((product) => <Product key={product.id_descuento} product={product} handleUpdateShoppingCart={handleListenLocalStorageUpdateShopping} />)
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Grid container direction='column' justifyContent='center'>
                        {
                            productsShoppingCart.length > 0 && (
                                <>
                                    <Grid container direction='row' justifyContent='space-evenly'>
                                        <Grid item xs={6}>
                                            Titulo
                                        </Grid>
                                        <Grid item xs={6}>
                                            Cantidad
                                        </Grid>
                                    </Grid>
                                    {
                                        productsShoppingCart.map((product) =>
                                            <Grid container direction="row" alignItems="center" className={classes.resumeItem} key={product.id_descuento}>
                                                <Grid item xs={6}>
                                                    {product.titulo}
                                                </Grid>
                                                <Grid item xs={2}>
                                                    x{product.cantidad}
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Button variant="contained" onClick={() => handleDeleteProductShoppingCart(product.id_descuento)}> Eliminar</Button>
                                                </Grid>
                                            </Grid>)
                                    }

                                    <Button color="primary" onClick={() => history.push('/carro')} variant="contained" style={{ marginTop: 20 }}>
                                        Ir a pagar
                                    </Button>
                                </>
                            )
                        }


                    </Grid>
                </Grid>
            </Grid>
            <Pagination page={currentPage} count={lastPagePagination - 1} onChange={(event, value) => setCurrentPage(value)} />
        </div>
    )
}

export default ProductList
