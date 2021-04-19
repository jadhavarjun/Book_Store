const addressService = require('../Service/addressService')

const response = {};
class AddressController {
    addAddress(req, res) {
        try {
            let id = req.decoded.id;
            addressService.addAddress(req.body, id)
                .then((result) => {
                    response.data = result.data;
                    response.flag = true;
                    response.message = result.message;
                    res.status(result.status).send(response);
                }).catch((err) => {
                    response.flag = false;
                    response.data = err.message;
                    res.status(err.status).send(response);
                });
            console.log(req.body);
        } catch (error) {
            console.log(error);
        }

    }

    updateAddress(req, res) {
        try {
            let newData = req.body;
            let id = req.params.id;
            console.log("new data ff", id, newData);
            addressService.updateAddress(id, newData)
                .then((result) => {
                    response.flag = true;
                    response.data = result.data;
                    response.message = result.message;
                    res.status(result.status).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.data = err.message;
                    res.status(err.status).send(response);
                });
        } catch (error) {
            console.error("Record is Not found Please Enter Correct One");
        }
    }
    removeAddress(req, res) {
        try {
            let id = req.params.id;
            console.log("empid", id);
            addressService.removeAddress(id)
                .then((result) => {
                    response.flag = true;
                    response.data = result.data;
                    response.message = result.message;
                    res.status(result.status).send(response);
                }).catch((err) => {
                    response.flag = false;
                    response.data = err.message;
                    res.status(err.status).send(response);
                });
        } catch (error) {
            console.error("Record is Not found Please Enter Correct One");
        }
    }
    getAddress(req, res){
        try {
            let id = req.decoded.id;
            addressService.getAddress(id)
                .then((result) => {
                    response.data = result.data;
                    response.flag = true;
                    response.message = result.message;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.flag = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });
        } catch (error) {
            console.error("Record is Not found Please Enter Correct One");
        }
    }
}
module.exports = new AddressController();