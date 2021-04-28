import { Button, IconButton, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import Service from '../../Services/bookService'

import './CartBook.scss';

const service = new Service();

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
    }
}));

export default function CartBook(props) {
    const classes = useStyles();
    const [selectedQuantity, setSelectedQuantity] = useState(
        props.book.quantity
    );
    console.log("[[[[[[[[[[[", props.book)
    const updateQuantity = (flag) => {
        console.log("tarrrr", flag, selectedQuantity);
        if (flag == "minus") {
            console.log("minussssss");
            setSelectedQuantity(selectedQuantity - 1)
        }
        if (flag == "plus") {
            console.log("plusssssss");
            setSelectedQuantity(selectedQuantity + 1)
        }
        let data = {
            quantity: selectedQuantity
        }
        service.updateCartItem(data, props.book._id)
            .then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });
    }
    const removeFromCart = () => {
        console.log("wwwwwwwwwwwwwwww", props.book._id);
        service.deleteCartItem(props.book._id)
            .then((result) => {
                props.getCartItem();
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });
    }
    return (
        <div className="cartItem">
            {/* <div
                className={
                    props.isQuantityShown
                        ? "book-image-container-cart"
                        : "book-image-container-cart-small"
                }
            >
                <img src={props.book.productID.bookImgUrl} alt={props.book.productID.bookName} className="cartBookImage" />
            </div>
            <div className="infoContainer">
                <div className="book-info-side-cart">
                    <Typography
                    // gutterBottom
                    // className="book-title"
                    // color="textPrimary"
                    // component="h1"
                    className={classes.bookName}
                    >
                        {props.book.productID.bookName}
                    </Typography>
                    <Typography
                        className="book-author"
                        color="textSecondary"
                        component="p"
                    className={classes.bookAuthor}
                    >
                        by {props.book.productID.author}
                    </Typography>
                    <Typography className={classes.bookPrize} color="textPrimary" component="p">
                        {props.isQuantityShown
                            ? "Rs. " + props.book.productID.price
                            : ""}
                    </Typography>
                </div>
                {props.isQuantityShown ? (
                    <div className="countItem">
                        <div className="book-cart-quantity-buttons">
                            <IconButton
                                className={classes.countButton}
                                onClick={() => {
                                    updateQuantity("minus")
                                }}
                            >
                                <RemoveCircleOutlineRoundedIcon />
                            </IconButton>
                            <TextField
                                // onChange={handleChange}
                                type="number"
                                size="small"
                                className="cart-book-quantity"
                                variant="outlined"
                                value={selectedQuantity}
                            />
                            <IconButton
                                className={classes.countButton}
                                onClick={() => {
                                    updateQuantity("plus")
                                }}
                            >
                                <AddCircleOutlineRoundedIcon />
                            </IconButton>
                        </div>
                        <div className="remove-btn">
                            <Button
                                onClick={() => {
                                    removeFromCart();
                                }}
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div> */}
            <div className="cartBookItem">
                <img src={props.book.productID.bookImgUrl} alt={props.book.productID.bookName} className="cartBookImage" />
                <div className="infoContainer">
                    <div className="book_name-price-author">
                        <Typography className={classes.bookName}>
                            {props.book.productID.bookName}
                        </Typography>
                        <Typography className={classes.bookAuthor}>
                            {props.book.productID.author}
                        </Typography>
                        <Typography className={classes.bookPrize}>
                            Rs. {props.book.productID.price}
                        </Typography>
                    </div>
                    <div className="countItem">
                        <IconButton
                            className={classes.countButton}
                            onClick={() => {
                                updateQuantity("minus")
                            }}
                        >
                            <RemoveCircleOutlineRoundedIcon fontSize="small" />
                        </IconButton>
                        <TextField
                            type="number"
                            size="small"
                            className="cart-book-quantity"
                            variant="outlined"
                            value={selectedQuantity}
                        />
                        <IconButton
                            className={classes.countButton}
                            onClick={() => {
                                updateQuantity("plus")
                            }}
                        >
                            <AddCircleOutlineRoundedIcon fontSize="small" />
                        </IconButton>
                        {/* <Typography>
                            <Button onClick={() => { removeFromCart() }}>Remove</Button>
                        </Typography> */}
                        <div className="book-cart-quantity-buttons">
                            <Button
                                onClick={() => { removeFromCart() }}
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}