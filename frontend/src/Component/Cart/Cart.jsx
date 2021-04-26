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

const service = new Service();

// let Validate = new validation();

export default function Cart() {
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
    const [addressID, setAddressID] = useState("")
    const [orderID, setOrderID] = useState("")

    const [isNameInvalid, setIsNameInvalid] = useState(false);
    const [isPhoneInvalid, setIsPhoneInvalid] = useState(false);
    const [isPincodeInvalid, setIsPincodeInvalid] = useState(false);
    const [isLocalityInvalid, setIsLocalityInvalid] = useState(false);
    const [isAddressInvalid, setIsAddressInvalid] = useState(false);
    const [isCityInvalid, setIsCityInvalid] = useState(false);
    const [isLandmarkInvalid, setIsLandmarkInvalid] = useState(false);



    const allDetailsValid = () => {
        return (
            name.length !== 0 &&
            phone.length !== 0 &&
            pincode.length !== 0 &&
            locality.length !== 0 &&
            address.length !== 0 &&
            city.length !== 0 &&
            landmark.length !== 0 &&
            !isNameInvalid &&
            !isPhoneInvalid &&
            !isPincodeInvalid &&
            !isLocalityInvalid &&
            !isAddressInvalid &&
            !isCityInvalid &&
            !isLandmarkInvalid
        );
    };

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
                console.log("OOOOOOOOOOOOOOOOOOOOO", result);
            }).catch((err) => {
                console.log(err);
            });
    }

    const history = useHistory();

    return (
        <div className="dashboard">
            <Navbar
                bookCount={0}
            />
            <Grid container className="cart-details">
                <Grid item container md={10}>
                    <Grid item md={10}>
                        <CustomerCart
                            //   reloadCart={reloadCart}
                            books={bookList}
                        ></CustomerCart>
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
                                            value={name}
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
                                            error={isAddressInvalid}
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
                                        // value={type}
                                        //   onChange={(e) => {
                                        //     setType(e.target.value);
                                        //   }}
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
                                        {cartItem.length == 0 ? <Button variant="contained" color="primary" disabled>
                                            Placed Your Order
                                        </Button> : <Button variant="contained" color="primary"
                                            onClick={() => {
                                                placedOrder();
                                            }}
                                        >
                                            Placed Your Order
                                        </Button>}

                                    </FormControl>
                                </Grid>
                            </Grid>
                        </div>
                        {/* <OrderSummary
              placeOrder={placeOrder}
              reloadCart={reloadCart}
              books={bookList}
            /> */}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}