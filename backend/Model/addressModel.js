const mongoose = require('mongoose');

const Schema = mongoose.Schema
// a mongoose schema
var addressSchema = new mongoose.Schema({
    productID: {
        type: Schema.Types.ObjectId, //referencing other documents from other collections
        ref: 'product', //userSchema
        require: true
    },
    
    email: {
        type: String,
        default: ""
    },
    name:
    {
        type: String,
        default: ""
    },
    address:
    {
        type: String,
        default: ""
    },
    postcode:
    {
        type: String,
        default: ""
    },
    state:
    {
        type: String,
        default: ""
    },
});

var addressModel = mongoose.model('address', addressSchema);