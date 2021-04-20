const mongoose = require('mongoose');

const Schema = mongoose.Schema
// a mongoose schema
var orderSchema = new mongoose.Schema({
    userID: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        require: true
    },
    product:[{
        quantity:{
            type: Number,
            require: true
        },
        productID:{
            type: Schema.Types.ObjectId, 
            ref: 'product',
            require: true
        }
    }],
    // productID: [{
    //     type: Schema.Types.ObjectId, 
    //     ref: 'product',
    //     require: true
    // }],
    addressID: {
        type: Schema.Types.ObjectId,
        ref: 'address', 
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