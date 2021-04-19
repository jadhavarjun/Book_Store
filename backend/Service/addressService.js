const addressModel = require('../Model/addressModel')
const statusCode = require('../Middleware/httpStatusCode.json');

class AddressService {
    addAddress(data, id) {
        data.userID = id;
        return addressModel.addAddress(data)
            .then((result) => {
                return ({ success: true, message: "Address Added Successfully", data: result, status: statusCode.OK });
            }).catch((error) => {
                return ({ success: false, message: "Failed to inset Address", error: statusCode.BadRequest });
            });

    }
    updateAddress(id, newData) {
        return addressModel.updateAddress(id, newData)
            .then((result) => {
                return ({ message: "Address is Updated", data: result, status: statusCode.OK });
            }).catch((err) => {
                return ({ message: "Address is Not found", error: err, status: statusCode.NotFound });
            });
    }
    removeAddress(id) {
        return addressModel.removeAddress(id)
            .then((result) => {
                return ({ message: "Address Deleted Successfully", data: result, status: statusCode.OK });
            }).catch((err) => {
                return ({ message: "Address is Not Deleted", error: err, status: statusCode.NotFound });
            });
    }
    getAddress(id){
        return addressModel.getAddress(id)
        .then((result) => {
            return ({ message: "User Address", data: result, status: statusCode.OK });
        }).catch((err) => {
            return ({ message: "Address not Found", error: err, status: statusCode.NotFound });
        });
    }
}
module.exports = new AddressService();