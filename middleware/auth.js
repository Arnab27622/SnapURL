const { verifyToken } = require('../service/auth.js');
const User = require('../models/user.js');

//! Authentication
async function checkForAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.uid;
    req.user = null;

    if (!tokenCookie) {
        return next();
    }

    try {
        const token = tokenCookie;
        const decoded = await verifyToken(token);
        const user = await User.findById(decoded.user);
        
        if (!user) {
            return next();
        }
        
        req.user = user;
        return next();
    } catch (error) {
        console.error('Error in token verification:', error.message);
        req.user = null;
    }
}

//! Authorization
function restrictTo(roles) {
    return function (req, res, next) {
        if (!req.user) {
            return res.redirect('/login');
        }
        if (!roles.includes(req.user.role)) {
            return res.end('Unauthorized');
        }

        return next();
    }
}

module.exports = { checkForAuthentication, restrictTo };
