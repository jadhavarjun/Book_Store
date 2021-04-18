const cartModel = require('../Model/cartModel')
const statusCode = require('../Middleware/httpStatusCode.json')

class CartService {
    addBookCart(data, id) {
        data.userID = id;
        return cartModel.addBookCart(data)
            .then((result) => {
                return ({ success: true, message: "Product Added into Cart Successfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ success: false, message: "Failed to Add Cart", status: statusCode.BadRequest });
            })

    }
    removeBookCart(id) {
        return cartModel.removeBookCart(id)
            .then((result) => {
                return ({ message: "Book Remove From Cart Successfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ message: "Cart Record is Not found", error: error, status: statusCode.NotFound });
            })
    }
    getUserCart(id) {
        let userID = { userID: id }
        return cartModel.getUserCart(userID)
            .then((result) => {
                return ({ message: "User All Cart Sccessfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ message: "Note Record is Not found", error: error, status: statusCode.NotFound });
            })
    }
    updateQuantityCart(id, newData) {
        return cartModel.updateCart(id, newData)
            .then((result) => {
                return ({ message: "Cart Update Successfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ message: "Cart is Not found", error: error, status: statusCode.NotFound });
            })
    }
}
module.exports = new CartService();