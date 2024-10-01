require('dotenv').config();

const jwt = require('jsonwebtoken');

function createAuthenticationToken(user) {
    return jwt.sign({
        user: user._id,
        email: user.email,
        role: user.role,
    }, process.env.JWT_SECRET);
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return reject(err);
            }
            resolve(decoded);
        });
    });
}

module.exports = {
    createAuthenticationToken,
    verifyToken
}