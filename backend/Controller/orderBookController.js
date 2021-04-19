const orderBookService = require('../Service/orderBookService')

let response = {}
class OrderBookController {
    placeOrder(req, res) {
        try {
            let id = req.decoded.id;
            orderBookService.placeOrder(req.body, id)
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
    getOrderDetails(req, res) {
        try {
            let id = req.decoded.id;
            orderBookService.getOrderDetails(id)
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

        }
    }
}
module.exports = new OrderBookController();