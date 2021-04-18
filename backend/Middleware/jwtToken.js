const jwt = require('jsonwebtoken');

class JWTToken {
    jwtToken(tokenData) {
        var token = jwt.sign(tokenData, 'shhhhh');
        return token;
    }

    tokenVerify(req, res, next) {
        console.log("from tokenverify")
        let token = req.headers.token;
        if (token) {
            jwt.verify(token, 'shhhhh', (err, decoded) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Token is not valid'
                    });
                } else {
                    // console.log("verified")
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.send({
                success: false,
                message: 'No token provided.'
            });
        }
    }

}
module.exports = new JWTToken();