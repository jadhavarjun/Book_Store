const bcrypt = require('bcrypt');
const userModel = require('../Model/userModel')
const statusCode = require('../Middleware/httpStatusCode.json');
const hashPassword = require('../Middleware/hashPassword')
const jwtToken = require('../Middleware/jwtToken');

class UserService {
    insert(data) {

        let hash = hashPassword.hashPassword(data.password);
        data.password = hash;
        return userModel.findOne(data.email)
            .then((result) => {
                if (result) {
                    return ({ success: false, message: "email already exit", status: statusCode.BadRequest });
                } else {
                    return userModel.create(data)
                        .then((result) => {
                            console.log("Service then");
                            return ({ success: true, message: "Employee Record insert Successfully", data: result, status: statusCode.OK });
                        })
                        .catch((error) => {
                            console.log("Service catch");
                            return ({ success: false, message: "Failed to inset Employee record", error: statusCode.BadRequest });
                        })
                }
            })

    }
    //login
    login(data) {
        let email = data.email;
        let password = data.password;
        return userModel.findOne(email)
            .then((result) => {
                if (result) {
                    return hashPassword.comparePassword(password, result.password)
                        .then((res) => {
                            if (res) {
                                let tokenData = {
                                    role: result.role,
                                    mail: result.email,
                                    id: result._id
                                }
                                console.log("tokenDatatatgugj",tokenData);
                                let token = jwtToken.jwtToken(tokenData);
                                let dataObj = new Object();

                                dataObj._id = result._id;
                                dataObj.role = result.role;
                                dataObj.firstName = result.firstName;
                                dataObj.lastName = result.lastName;
                                dataObj.email = result.email;
                                dataObj.password = result.password;
                                dataObj.token = token;

                                return ({ flag: true, message: "User Login Successfully!!", data: dataObj, status: statusCode.OK });
                            }
                            else {
                                return ({ flag: false, message: "Password is Wrong", status: statusCode.Unauthorized });
                            }

                        });
                }
                else {
                    return ({ flag: false, message: "Please Enter Valid Email!!", status: statusCode.NotFound });
                }

            })
    }


}
module.exports = new UserService();