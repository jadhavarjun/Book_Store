const mongoose = require('mongoose');

const Schema = mongoose.Schema
const cartSchema = new mongoose.Schema({
    userID: {
        type: Schema.Types.ObjectId, //referencing other documents from other collections
        ref: 'user', //userSchema
        require: true
    },
    productID: {
        type: Schema.Types.ObjectId, //referencing other documents from other collections
        ref: 'product', //userSchema
        require: true
    },
    quantity: {
        type: Number,
        default: 1
    },
},
    {
        timestamps: true
    });

let cartModel = mongoose.model('cart', cartSchema);

class CartModel {
    addBookCart(data) {
        let noteData = new cartModel(data)
        return noteData.save(data)
            .then((result) => {
                return result;
            }).catch((error) => {
                return error;
            });
    }
    removeBookCart(id){
        return cartModel.findByIdAndRemove(id)
        .then(result => {
            return result;
        })
        .catch(error => {
            return error;
        }) 
    }
    getUserCart(id){
        return cartModel.find(id)
        .populate('userID')
        .populate('productID')
        .then(result => {
            return result;
        })
        .catch(error => {
            return error;
        })
    }
    updateCart(id, newData){
        return cartModel.findByIdAndUpdate(id, newData)
            .then(result => {
                console.log("model then");
                return result;
            })
            .catch(error => {
                console.log("model catch");
                return error;
            })
    }
}
module.exports = new CartModel();