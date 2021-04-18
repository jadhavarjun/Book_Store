const productModel = require('../Model/productModel')
const statusCode = require('../Middleware/httpStatusCode.json')

class ProductService {
    addBook(data, role) {
        console.log("///////", role);
        // data.adminID = id;
        return productModel.addBook(data)
            .then((result) => {
                if (role == "admin") {
                    return ({ success: true, message: "Book Added Successfully", data: result, status: statusCode.OK });
                } else {
                    return ({ success: false, message: "You are Not Authorized Person", status: statusCode.BadRequest });
                }
            })
            .catch((error) => {
                return ({ success: false, message: "Failed to Add Book", status: statusCode.BadRequest });
            })
    }

    findAll() {
        return productModel.findAll()
            .then((result) => {
                return ({ message: "Product Record", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ message: "Their is No Product record", error: error, status: statusCode.NotFound });
            })
    }

    updateBook(id, newData, role) {
        return productModel.updateBook(id, newData)
            .then((result) => {
                if (role == "admin") {
                    return ({ message: "Product Update Successfully", data: result, status: statusCode.OK });
                } else {
                    return ({ success: false, message: "You are Not Authorized Person", status: statusCode.BadRequest });
                }
            })
            .catch((error) => {
                return ({ message: "Product is Not found", error: error, status: statusCode.NotFound });
            })
    }

    deleteBook(id, role) {
        return productModel.deleteBook(id)
            .then((result) => {
                if (role == "admin") {
                    return ({ message: "Book Deleted Successfully", data: result, status: statusCode.OK });
                } else {
                    return ({ success: false, message: "You are Not Authorized Person", status: statusCode.BadRequest });
                }
            })
            .catch((error) => {
                return ({ message: "Book Record is Not found", error: error, status: statusCode.NotFound });
            })
    }
}
module.exports = new ProductService();