const mongoose = require('mongoose');

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
    price: {
        type: Number,
        required: true
    },
    bookImgUrl: {
        type: String,
        required: true
    }
},
{
    timestamps: true
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

    findAll() {
        return productModel.find({})
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return error;
            })
    }

    findOne(id) {
        return productModel.findOne({ _id: id })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return error;
            })
    }

    updateBook(id, newData) {
        return productModel.findByIdAndUpdate(id, newData)
            .then(result => {
                return result;
            })
            .catch(error => {
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