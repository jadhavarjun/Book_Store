const cartService = require('../Service/cartService')

const response = {};
class CartController {
    addBookCart(req, res) {
        try {
            let id = req.decoded.id;
            console.log("//////", req.body, id);
            cartService.addBookCart(req.body, id)
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
            console.log(error);
        }
    }
    removeBookCart(req, res) {
        try {
            let id = req.params.id;
            console.log("empid", id);
            cartService.removeBookCart(id)
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
            console.error("User Record is Not found Please Enter Correct One");
        }
    }
    getUserCart(req, res) {
        try {
            let id = req.decoded.id;
            cartService.getUserCart(id)
                .then((result) => {
                    response.data = result.data;
                    response.flag = true;
                    response.message = result.message;
                    res.status(result.status).send(response);
                }).catch((err) => {
                    response.flag = false;
                    response.message = err.message;
                    res.status(err.status).send(response);
                });
        } catch (error) {
            console.error("Notes Record is Not found Please Enter Correct One");
        }
    }

    updateQuantityCart(req, res){
        try {
            let newData = req.body;
            let id = req.params.id;
            cartService.updateQuantityCart(id, newData)
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
}
module.exports = new CartController();