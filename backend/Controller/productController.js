const productService = require('../Service/productService')

const response = {};
class ProductController {
    addBook(req, res) {
        try {
            let role = req.decoded.role;
            productService.addBook(req.body, role)
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

    getData(req, res) {
        try {
            productService.findAll()
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
        } catch (error) {
            console.log(error);
        }
    }

    updateBook(req, res) {
        try {
            let newData = req.body;
            let id = req.params.id;
            let role = req.decoded.role;
            productService.updateBook(id, newData, role)
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
            let role = req.decoded.role;
            console.log("empid", id);
            productService.deleteBook(id, role)
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