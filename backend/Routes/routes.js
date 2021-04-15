const userController = require('../Controller/userController')
const productController = require('../Controller/productController')
const jwtToken = require("../Middleware/jwtToken");
// const validate = require('../Middleware/validate');
// const validator = require('../Middleware/validator');

module.exports = (app) => {
    //user and admin both
    app.post("/registration", userController.create);
    app.post("/login", userController.login);

    //product apis
    app.post("/admin/add_book", jwtToken.tokenVerify, productController.addBook);
    app.put("/admin/update_book/:id",jwtToken.tokenVerify, productController.updateBook);
    app.delete("/admin/delete_book/:id", jwtToken.tokenVerify, productController.deleteBook);
}