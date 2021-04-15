const productService = require('../Service/productService')

const response = {};
class ProductController {
    addBook(req, res) {
        console.log("reqduishifji", req.body)
        try {
            // let id = req.decoded.id;
            productService.addBook(req.body)
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

    updateBook(req, res) {
        try {
            let newData = req.body;
            let id = req.params.id;
            productService.updateBook(id, newData)
                .then((result) => {
                    response.flag = true;
                    response.data = result.data;
                    response.message = result.message;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });

        } catch (error) {
            console.error("Record is Not found Please Enter Correct One");
        }
    }


    deleteBook(req, res) {
        try {
            let id = req.params.id;
            console.log("empid", id);
            productService.deleteBook(id)
                .then((result) => {
                    response.flag = true;
                    response.data = result.data;
                    response.message = result.message;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.flag = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });
        } catch (error) {
            console.error("Employee Record is Not found Please Enter Correct One");
        }
    }
}
module.exports = new ProductController();