const mongoose = require('mongoose');

const Schema = mongoose.Schema
// a mongoose schema
var addressSchema = new mongoose.Schema({
    productID: {
        type: Schema.Types.ObjectId, //referencing other documents from other collections
        ref: 'product', //userSchema
        require: true
    },
   
    fullName:
    {
        type: String,
        required: [true, 'name is required']
    },
    mobile: {
        type: Number,
        required: [true, 'mobile number is required'],
        minlength: 10,
        maxlength: 10
    },
    pincode:
    {
        type: Number,
        required:[true, 'pincode is required']
    },
    city:
    {
        type: String,
        required:[true, 'city is required']
    },
    address:
    {
        type: String,
        required: [true, 'address is required']
    },
    landmark:
    {
        type: String,
        required:[true, 'landmark is required']
    },
    state:
    {
        type: String,
        required:[true, 'state is required']
    },
});

var addressModel = mongoose.model('address', addressSchema);

class AddressModel{
    addAddress(data){
        return addressModel.create(data)
        .then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }
    updateAddress(id, newData){
        return addressModel.findByIdAndUpdate(id, newData)
        .then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }
    removeAddress(id){
        return addressModel.findByIdAndRemove(id)
        .then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }
}
module.exports = new AddressModel();