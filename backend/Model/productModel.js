const mongoose = require('mongoose');
const userMoel = require('../Model/userModel')

const productSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: [true, 'Book Name is Required']
    },
    author: {
        type: String,
        required: [true, 'Autho Name is Required']
    },
    description: {
        type: String,
        required: [true, 'Description is Required']
    },
    quantity: {
        type: Number,
        default: 0
    },
    discountPrice: {
        type: Number,
        default: 0
    }

});

let productModel = mongoose.model('product', productSchema);

class ProductModel {
    addBook(data) {
        return productModel.create(data)
            .then((result) => {
                return result;
            }).catch((error) => {
                return error;
            });
    }

    updateBook(id, newData) {
        console.log("uuuuuuuppppppppppd");
        return productModel.findByIdAndUpdate(id, newData)
            .then(result => {
                console.log("UM Then");
                return result;
            })
            .catch(error => {
                console.log("UM Catch");
                return error;
            })
    }

    deleteBook(id) {
        return productModel.findByIdAndRemove(id)
            .then(result => {
                return result;
            })
            .catch(error => {
                return error;
            })
    }
}
module.exports = new ProductModel();