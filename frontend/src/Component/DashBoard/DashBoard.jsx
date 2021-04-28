import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../AppBar/AppBar";
import Books from "../DisplayBook/DisplayBook";
import { Switch, Route } from "react-router-dom";
import Footer from '../Footer/footer'
import Service from '../../Services/bookService'
import ProtectedRoute from '../protectedRoutes/protectedRoutes'

const service = new Service();

const useStyles = makeStyles((theme) => ({
    dashboardMain: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
    },

}));

export default function Dashboard(props) {
    const classes = useStyles();

    const [cartItem, setCartItem] = useState(0);

    React.useEffect(() => {
        getCartItem();
    }, []);
    const getCartItem = () => {
        service.getCartItem()
            .then((result) => {
                setCartItem(result.data.data.length);
                console.log("SSSSSS", result.data.data)
            }).catch((err) => {
                console.log(err)
            });
    }
    return (
        <div className={classes.dashboardMain}>
            <AppBar cartItem={cartItem} />
            <Switch>
                <ProtectedRoute path="/dashBoard">
                    <Books cartItem={cartItem} getCartItem={getCartItem} />
                </ProtectedRoute>
            </Switch>
            <Footer />

        </div>
    );


}