import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
    titleOrder: {
        marginBottom: theme.spacing(1)
    },
    input: {
        maxWidth: 500,
        margin: theme.spacing(0.5)
    }
}));

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
];


const ShoppingCart = () => {

    const classes = styles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
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
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            <Box display="flex" flexDirection="row" alignItems="center">
                                                <img className={classes.imgProduct} alt="img" src="https://cuponassets.cuponatic-latam.com/backendCl/uploads/imagenes_descuentos/300447/2305783a4cf432d1489fc8bf17b96c39373488fb.XL2.jpg" />
                                                {row.name}
                                            </Box>
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Typography className={classes.titleOrder} align="center" variant="h5">Datos del pedido</Typography>
                        <TextField fullWidth className={classes.input} label="Nombre" variant="outlined" />
                        <TextField fullWidth className={classes.input} label="Email" variant="outlined" />
                        <TextField fullWidth className={classes.input} label="Telefono" variant="outlined" />
                        <Button variant=""> Confirmar pedido</Button>
                    </Box>

                </Grid>
            </Grid>
        </div>
    )
}

export default ShoppingCart
