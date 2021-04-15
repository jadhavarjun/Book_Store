const userService = require('../Service/userService')

const response = {};
class UserController {
    create(req, res) {
        console.log("cccccccccccccccccccccccccccccccccccc");
        try {
            userService.insert(req.body)
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
    login(req, res) {
        try {
            userService.login(req.body)
                .then((result) => {
                    response.sucess = result.flag;
                    response.message = result.message;
                    response.data = result.data;
                    // response.jwtToken = result.jwtToken;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.flag = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });
        } catch (error) {
            console.error(error);
        }
    }
}
module.exports = new UserController();