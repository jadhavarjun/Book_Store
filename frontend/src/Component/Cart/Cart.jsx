import React, { useState, useEffect } from "react";
import CustomerCart from "../CustomerCart/CustomerCart";
import Button from '@material-ui/core/Button';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@material-ui/core";
// import validation from "./../../Service/validation";
import Navbar from "../AppBar/AppBar";
import { Link, Redirect } from "react-router-dom";
// import OrderSummary from "../OrderSummary";
import './Cart.scss'
import { useHistory } from "react-router-dom";
import Service from '../../Services/bookService';
import { makeStyles } from "@material-ui/core/styles";

const service = new Service();

// let Validate = new validation();
const useStyles = makeStyles((theme) => ({
    bookName: {
        fontSize: "13px",
        fontWeight: "bold",
    },
    bookAuthor: {
        fontSize: "12px",
    },
    bookPrize: {
        fontSize: "13px",
        fontWeight: "bold",
    },
    countInput: {
        border: "1px lightgray solid",
        width: "15%",
        height: "30px",
    },
    countButton: {
        height: "5px",
        margin: "5px",
        border: "1px solid lightgray",
        width: "5px",
    },
    placeButton: {
        height: "50px",
        position: "relative",
    },
    inputField: {
        border: "1px solid lightgray",
        borderRadius: "5px",
        padding: "5px",
    },
    inputAdderss: {
        border: "1px solid lightgray",
        borderRadius: "5px",
        padding: "5px",
        minHeight: "80px",
        minWidth: "200px",
    },
    radioGroup: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
}));

export default function Cart(props) {
    const classes = useStyles();
    const [bookList, setBookList] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [pincode, setPincode] = useState("");
    const [locality, setLocality] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [landmark, setLandmark] = useState("");
    const [state, setState] = useState("");
    const [cartItem, setCartItem] = useState([]);
    const [addressID, setAddressID] = useState("");
    const [orderID, setOrderID] = useState("");
    const [showButton, setShowButton] = useState(true);
    const [showButtonContinue, setshowButtonContinue] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const [showSummary, setshowSummary] = useState(false);

    React.useEffect(() => {
        getAddress();
        getCartItem();
    }, []);

    const getAddress = () => {
        service.getAddress()
            .then((result) => {
                setName(result.data.data.fullName)
                setPhone(result.data.data.mobile)
                setPincode(result.data.data.pincode)
                setCity(result.data.data.city)
                setAddress(result.data.data.address)
                setLandmark(result.data.data.landmark)
                setState(result.data.data.state)
                setAddressID(result.data.data._id)
                console.log("rrrrrrrrrr", result);
            }).catch((err) => {
                console.log(err);
            });
    }

    const getCartItem = () => {
        service.getCartItem()
            .then((result) => {
                setCartItem(result.data.data);
                console.log("pppppppppppppppp", result.data.data)
            }).catch((err) => {
                console.log(err)
            });
    }

    const placedOrder = () => {
        let product = [];
        cartItem.map((obj) => {
            let data = {
                quantity: obj.quantity,
                productID: obj.productID._id
            }
            product.push(data)
        })
        let body = {
            product: product,
            addressID: addressID
        }
        service.placedOrder(body)
            .then((result) => {
                setOrderID(result.data.data.orderID)
                history.push("/order")
            }).catch((err) => {
                console.log(err);
            });
    }

    const history = useHistory();

    return (
        <div className="dashboard">
            <Navbar
                // bookCount={0}
                cartItem={cartItem.length}
            />
            <Grid container className="cart-details">
                <Grid item container md={8}>
                    <Grid item md={10}>
                        <div className="cart-box">
                            <CustomerCart
                            // //   reloadCart={reloadCart}
                            // books={bookList}

                            ></CustomerCart>

                            {showButton ? <Button className="place-order" variant="contained" color="primary"

                                onClick={() => {
                                    setShowDetails(true)
                                    setShowButton(false)
                                }}>Place Order</Button> : ""}
                        </div>
                        {showDetails ?
                            <div className="cart-box">
                                <Typography variant="h5">Customer Details</Typography>
                                <Grid container>
                                    <Grid container spacing={0} item md={8} className="cart-form">
                                        <FormControl className="cart-input-col">
                                            <TextField
                                                multiline
                                                rows={1}
                                                className="cart-input"
                                                size="small"
                                                name="name"
                                                defaultValue={name}
                                                variant="outlined"
                                                label="Full Name"
                                            />
                                        </FormControl>
                                        <FormControl className="cart-input-col">
                                            <TextField
                                                multiline
                                                rows={1}
                                                className="cart-input"
                                                size="small"
                                                name="phone"
                                                defaultValue={phone}
                                                type="number"
                                                variant="outlined"
                                                label="Phone Number"
                                            />
                                        </FormControl>
                                        <FormControl className="cart-input-col">
                                            <TextField
                                                multiline
                                                rows={1}
                                                className="cart-input"
                                                size="small"
                                                name="pincode"
                                                defaultValue={pincode}
                                                type="number"
                                                variant="outlined"
                                                label="Pincode"
                                                id="outlined-basic"
                                            />
                                        </FormControl>
                                        <FormControl className="cart-input-col">
                                            <TextField
                                                multiline
                                                rows={1}
                                                className="cart-input"
                                                size="small"
                                                defaultValue={city}
                                                name="address"
                                                variant="outlined"
                                                label="city"
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className="cart-input-col">
                                            <TextField
                                                multiline
                                                rows={3}
                                                className="cart-input"
                                                size="small"
                                                defaultValue={address}
                                                name="address"
                                                variant="outlined"
                                                label="Address"
                                            />
                                        </FormControl>
                                        <FormControl className="cart-input-col">
                                            <TextField
                                                multiline
                                                rows={1}
                                                className="cart-input"
                                                name="city"
                                                defaultValue={landmark}
                                                size="small"
                                                variant="outlined"
                                                label="Landmark"
                                            />
                                        </FormControl>
                                        <FormControl className="cart-input-col">
                                            <TextField
                                                multiline
                                                rows={1}
                                                className="cart-input"
                                                name="landmark"
                                                size="small"
                                                defaultValue={state}
                                                variant="outlined"
                                                label="State"
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className="cart-input-col">
                                            <FormLabel className="cart-input" component="legend">
                                                Type
                                           </FormLabel>
                                            <RadioGroup
                                                aria-label="type"
                                                name="type"
                                                className="cart-radio"
                                                dir="row"
                                            >
                                                <FormControlLabel
                                                    value="Home"
                                                    control={<Radio />}
                                                    label="Home"
                                                />
                                                <FormControlLabel
                                                    value="Work"
                                                    control={<Radio />}
                                                    label="Work"
                                                />
                                                <FormControlLabel
                                                    value="Other"
                                                    control={<Radio />}
                                                    label="Other"
                                                />
                                            </RadioGroup>
                                            <br />
                                           
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                {showButtonContinue ? <Button className="place-order" variant="contained" color="primary"
                                                onClick={() => {
                                                    setshowButtonContinue(false)
                                                    setshowSummary(true);
                                                }}>Continue</Button> : ""
                                            }
                            </div>
                            : <div className="cart-box">Customer Details</div>
                        }
                        {showSummary ?
                            <div className="cart-box">
                                {
                                    cartItem.map((obj) => {
                                        return (
                                            <div>
                                                <div className="">
                                                    <img className="cartBookImage" src={obj.productID.bookImgUrl} alt="" />
                                                </div>
                                                <div className="infoContainer">
                                                    <Typography className={classes.bookName}>
                                                        {obj.productID.bookName}

                                                    </Typography>
                                                    <Typography className={classes.bookAuthor}>
                                                        {obj.productID.author}
                                                    </Typography>
                                                    <Typography className={classes.bookPrize}>
                                                        Rs. {obj.productID.price * obj.quantity}
                                                    </Typography>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <Button className="place-order" variant="contained" color="primary"
                                    onClick={() => {
                                        placedOrder()
                                    }}>Continue</Button>

                            </div> : <div className="cart-box">Order SUmmary</div>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

}