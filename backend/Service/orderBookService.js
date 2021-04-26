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