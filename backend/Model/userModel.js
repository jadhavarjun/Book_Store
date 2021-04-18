var mongoose = require('mongoose');

var userModel = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is Required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is Required']
    },
    email: {
        type: String,
        required: [true, 'Email is Required'],
        unique: true
    },
    role: {
        type: String,
        enum : ['user','admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Password is Required']
    }

},
{
    timestamps: true
});


let userSchema = mongoose.model('user', userModel);
console.log("userSchema", userSchema);

class UserModel {
    //Registration
    create(data) {
        return userSchema.create(data)
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return ({ message: "Something Went Wrong Please Check", error: error });
            })
    }
    //login find user with mailId
    findOne(mail) {
        return userSchema.findOne({ email: mail })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return error;
            })
    }

}
module.exports = new UserModel();