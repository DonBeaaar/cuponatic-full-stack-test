import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Product from '../componets/Product'

const styles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
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


    return (
        <div className={classes.root}>
            <Grid container direction="row" justifyContent="center" className={classes.filterContainer}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>Filtrar productos</InputLabel>
                    <Select
                        // value={age}
                        // onChange={handleChange}
                        label="Filtrar productos"
                    >
                        <MenuItem value={10}>Titulo</MenuItem>
                        <MenuItem value={20}>Menor precio</MenuItem>
                        <MenuItem value={20}>Mayor precio</MenuItem>
                        <MenuItem value={20}>Mejor clasificacion</MenuItem>
                        <MenuItem value={20}>Menor distancia</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={8}>
                    <Grid container spacing={1}>
                        {
                            [1, 2, 3].map((_) => <Product key={_} />)
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Grid container>
                        <Grid item xs={6}>
                            Titulo
                        </Grid>
                        <Grid item xs={6}>
                            Cantidad
                        </Grid>
                        {
                            [1, 2, 3].map((_) =>
                                <Grid container direction="row" alignItems="center" className={classes.resumeItem}>
                                    <Grid item xs={6}>
                                        Item 1
                                    </Grid>
                                    <Grid item xs={2}>
                                        x1
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button variant="contained"> Eliminar</Button>
                                    </Grid>
                                </Grid>)
                        }

                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductList
