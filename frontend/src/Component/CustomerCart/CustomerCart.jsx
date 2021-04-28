import { Typography } from '@material-ui/core'
import React from 'react';
import CartBook from '../CartBook/CartBook';
import Service from '../../Services/bookService';
import Button from '@material-ui/core/Button';

const service = new Service();

export default function CustomerCart(props) {
    const [book, setBook] = React.useState([]);

    
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
    console.log("BBBBBBBBB",book)
    let cartBooks = book.map((item) => {
        console.log("mapppppppppmmmmmmmm",item)
        return <CartBook isQuantityShown={true} key={item._id} reloadCart={props.reloadCart} book={item} getCartItem={getCartItem} />
    });

    return (
        <div >
            <div className="my-cart">
            <Typography variant="h5">
                My cart({book.length})
            </Typography>
            </div>
            {book.length === 0 ? <div className="empty-cart" >Cart Is Empty</div> : 
            
            (<div className="cart-books" variant="h5">
                {cartBooks}
            </div> )}
            {/* <Button className="place-order" variant="contained" color="primary" >Place Order</Button> */}
        </div>
    )
}