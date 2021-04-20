const orderBookModel = require('../Model/orderBookModel')
const statusCode = require('../Middleware/httpStatusCode.json')
const productModel = require('../Model/productModel')

class OrderBookService {
    placeOrder(data, id) {
        console.log("wwwwwww", data.product);
        data.userID = id;
        let now = Date.now().toString()
        data.orderID = now;
        return orderBookModel.placeOrder(data)
            .then((result) => {

                let product = result.product;
                for (let i = 0; i <= product.length; i++) {
                    var data = {}
                    var id = "";
                    productModel.findOne(product[i].productID)
                        .then((result2) => {
                            console.log("/////////////", result2);
                            var qnt = result2.quantity - product[i].quantity;
                            console.log("{}{}{}{}{}{{}{}{", qnt);
                            id = product[i].productID;
                            console.log("ooooooooooo", id);
                            data = {
                                quantity: qnt
                            }
                            console.log("dadadadad", id, data);
                            if (qnt > 0) {
                                productModel.updateBook(id, data)
                                    .then(() => {

                                    })
                            }
                        }).catch((err) => {

                        });
                }

                return ({ success: true, message: "Order Placed Successfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                console.log("falilsjlvjsljf");
                return ({ success: false, message: "Failed to Placed Order", status: statusCode.BadRequest });
            })
    }
    getOrderDetails(id) {
        return orderBookModel.getOrderDetails(id)
            .then((result) => {
                return ({ success: true, message: "Order Details Successfully", data: result, status: statusCode.OK });
            }).catch((err) => {
                return ({ success: false, message: "Failed to get details Order", status: statusCode.BadRequest });
            });

    }
}
module.exports = new OrderBookService();