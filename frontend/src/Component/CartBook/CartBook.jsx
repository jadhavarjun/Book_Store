import { Button, IconButton, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import Service from '../../Services/bookService'

import './CartBook.scss';

const service = new Service();

export default function CartBook(props) {
    const [selectedQuantity, setSelectedQuantity] = useState(
        props.book.quantity
    );

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
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });
    }
    return (
        <div className="book-info-cart">
            <div
                className={
                    props.isQuantityShown
                        ? "book-image-container-cart"
                        : "book-image-container-cart-small"
                }
            >
                <img src={props.book.productID.bookImgUrl} alt={props.book.productID.bookName} className="img" />
            </div>
            <div className="book-details-cart">
                <div className="book-info-side-cart">
                    <Typography
                        gutterBottom
                        className="book-title"
                        color="textPrimary"
                        component="h1"
                    >
                        {props.book.productID.bookName}
                    </Typography>
                    <Typography
                        className="book-author"
                        color="textSecondary"
                        component="p"
                    >
                        by {props.book.productID.author}
                    </Typography>
                    <Typography className="book-price" color="textPrimary" component="p">
                        {props.isQuantityShown
                            ? "Rs. " + props.book.productID.price
                            : ""}
                    </Typography>
                </div>
                {props.isQuantityShown ? (
                    <div className="book-cart-quantity">
                        <div className="book-cart-quantity-buttons">
                            <IconButton
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
                                onClick={() => {
                                    updateQuantity("plus")
                                }}
                            >
                                <AddCircleOutlineRoundedIcon />
                            </IconButton>
                        </div>
                        <div className="book-cart-quantity-buttons">
                            <Button
                                onClick={()=>{
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
            </div>
        </div>
    );
}