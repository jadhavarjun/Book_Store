const productModel = require('../Model/productModel')
const statusCode = require('../Middleware/httpStatusCode.json')

class ProductService {
    addBook(data) {
        // data.adminID = id;
        return productModel.addBook(data)
            .then((result) => {
                return ({ success: true, message: "Book Added Successfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ success: false, message: "Failed to Add Book", status: statusCode.BadRequest });
            })
    }

    updateBook(id, newData) {
        return productModel.updateBook(id, newData)
            .then((result) => {
                return ({ message: "Product Update Successfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ message: "Product is Not found", error: error, status: statusCode.NotFound });
            })
    }

    deleteBook(id) {
        return productModel.deleteBook(id)
            .then((result) => {
                return ({ message: "Book Deleted Successfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ message: "Book Record is Not found", error: error, status: statusCode.NotFound });
            })
    }
}
module.exports = new ProductService();