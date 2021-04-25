import { Typography } from '@material-ui/core'
import React from 'react';
import CartBook from '../CartBook/CartBook';
import Service from '../../Services/bookService';

const service = new Service();

export default function CustomerCart(props) {
    const [book, setBook] = React.useState([]);

    let cartBooks = book.map( (book) => {
        return <CartBook isQuantityShown={true} key={book._id} reloadCart={props.reloadCart} book={book}/>
    });

    React.useEffect(() => {
        getCartItem();
    }, []);

    const getCartItem = () => {
        service.getCartItem()
            .then((result) => {
                setBook(result.data.data);
                console.log("pppppppppppppppp",result.data.data)
            }).catch((err) => {
                console.log(err)
            });
    }
    return (
        <div className="cart-box" >
            <Typography variant="h5">
                My cart({book.length})
            </Typography>
            {book.length === 0 ? <div className="empty-cart" >Cart Is Empty</div> : 
            (<div className="cart-books" variant="h5">
                {cartBooks}
            </div> )}
            {/* <Button className="place-order" variant="contained" color="secondary" >Place Order</Button> */}
        </div>
    )
}