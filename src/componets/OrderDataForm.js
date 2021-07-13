import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import { startPostOrder } from '../services/product';

const styles = makeStyles((theme) => ({
    titleOrder: {
        marginBottom: theme.spacing(1)
    },
    input: {
        maxWidth: 500,
        margin: theme.spacing(0.5)
    },
    error: {
        color: "red"
    }
}));


const OrderDataForm = ({ handlePurchaseForm }) => {

    const classes = styles();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        if (await startPostOrder(data)) {
            handlePurchaseForm(true);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography className={classes.titleOrder} align="center" variant="h5">Datos del pedido</Typography>
                <TextField fullWidth className={classes.input} label="Nombre" variant="outlined" {...register("name", { required: true })} />
                {errors.name && <span className={classes.error}>El nombre es requerido</span>}
                <TextField fullWidth className={classes.input} label="Email" variant="outlined" {...register("email", { required: true })} />
                {errors.email && <span className={classes.error}>El email es requerido</span>}
                <TextField fullWidth className={classes.input} label="Telefono" variant="outlined" {...register("phone", { required: true })} />
                {errors.phone && <span className={classes.error}>El telefono es requerido</span>}
                <Button type="submit"> Confirmar pedido</Button>
            </Box>
        </form>
    )
}

export default OrderDataForm
