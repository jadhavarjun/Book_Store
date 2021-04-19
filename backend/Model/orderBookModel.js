const mongoose = require('mongoose');

const Schema = mongoose.Schema
// a mongoose schema
var orderSchema = new mongoose.Schema({
    userID: {
        type: Schema.Types.ObjectId, //referencing other documents from other collections
        ref: 'user', //userSchema
        require: true
    },
    productID: [{
        type: Schema.Types.ObjectId, //referencing other documents from other collections
        ref: 'product', //userSchema
        require: true
    }],
    addressID: {
        type: Schema.Types.ObjectId, //referencing other documents from other collections
        ref: 'address', //userSchema
        require: true
    },
    orderID: {
        type: Number,
        require: true
    }
},
{
    timestamps: true
});

var orderModel = mongoose.model('orderPlaced', orderSchema);

class OrderBookModel {
    placeOrder(data) {
        return orderModel.create(data)
            .then((result) => {
                return result;
            }).catch((error) => {
                return error;
            });
    }
    getOrderDetails(id){
        return orderModel.findOne({ userID: id })
        .populate('userID')
        .populate('productID')
        .populate('addressID')
        .then((result) => {
            return result;
        })
        .catch((error) => {
            return error;
        })
    }
}
module.exports = new OrderBookModel();