const userController = require('../Controller/userController')
const productController = require('../Controller/productController')
const cartController = require('../Controller/cartController')
const addressController = require('../Controller/addressController')
const jwtToken = require("../Middleware/jwtToken");
// const validate = require('../Middleware/validate');
// const validator = require('../Middleware/validator');

module.exports = (app) => {
    //user and admin both
    app.post("/registration", userController.create);
    app.post("/login", userController.login);

    //product apis
    app.post("/admin/add_book",jwtToken.tokenVerify,productController.addBook);
    app.put("/admin/update_book/:id",jwtToken.tokenVerify, productController.updateBook);
    app.delete("/admin/delete_book/:id", jwtToken.tokenVerify, productController.deleteBook);
    app.get("/bookstore/get", jwtToken.tokenVerify, productController.getData);

    // cart apis
    app.post("/user/add_cart",jwtToken.tokenVerify,cartController.addBookCart);
    app.delete("/user/remove_cart/:id", jwtToken.tokenVerify, cartController.removeBookCart);
    app.get("/cart", jwtToken.tokenVerify, cartController.getUserCart);
    app.put("/cart/update/:id",jwtToken.tokenVerify, cartController.updateQuantityCart);

    //address apis
    app.post("/add/address",jwtToken.tokenVerify, addressController.addAddress);
    app.put("/update/address/:id", jwtToken.tokenVerify, addressController.updateAddress);
    app.delete("/remove/address/:id", jwtToken.tokenVerify, addressController.removeAddress);
}