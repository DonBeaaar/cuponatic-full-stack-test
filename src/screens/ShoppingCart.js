import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import OrderDataForm from '../componets/OrderDataForm';
import OrderData from '../componets/OrderData';
import { useHistory } from 'react-router-dom';


const styles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(5)
    },
    imgProduct: {
        height: 50,
        width: 70
    },
    table: {
        minWidth: 650,
    },
}));

const ShoppingCart = () => {

    const classes = styles();

    const [correctPurchase, setCorrectPurchase] = useState(false);

    const history = useHistory()


    const handlePurchaseForm = (purchase) => {
        setCorrectPurchase(purchase);
        if (purchase) {
            setTimeout(() => {
                history.push('/')
            }, 3000);
        }
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <OrderData />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <OrderDataForm handlePurchaseForm={handlePurchaseForm} />
                </Grid>
                <Grid item xs={12}>
                    {
                        correctPurchase &&
                        <Alert severity="success">Tu compra se ha realizado correctamente. Te redigiremos a la pantalla de inicio</Alert>
                    }
                </Grid>
            </Grid>

        </div>
    )
}

export default ShoppingCart
