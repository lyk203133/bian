const jwt = require("jsonwebtoken");
const querystring = require('querystring');


// 生成token
let jwtHelper = {

    generateToken: function (payload, expiresIn = 3600) {
        const token = jwt.sign(payload, process.env.jwt_token, { expiresIn: expiresIn });
        return token;
    },
    // 验证token
    verifyToken: function (token) {
        return jwt.verify(token, process.env.jwt_token, function (err, decoded) {
            if (err) {
                console.log("verify error", err);
                return null;
            }
            console.log("verify decoded", decoded);
            return decoded;
        });
    }
}
module.exports = jwtHelper