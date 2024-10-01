const User = require('../models/user.js');
// const URL = require('../models/url.js');

async function userSignUp(req, res) {
    const { fullName, email, password } = req.body;

    await User.create({
        fullName,
        email,
        password
    });
    return res.redirect('/');
};

async function userLogIn(req, res) {
    const { email, password } = req.body;

    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);
        return res.cookie('uid', token, {
            expires: new Date(Date.now() + 900000)  //* token expires after 15 minutes
        }).redirect('/');
    } catch (error) {
        return res.render('login', {
            error: 'Invalid email or password'
        });
    }
};

async function userLogOut(req, res) {
    res.clearCookie('uid');
    return res.status(201).redirect('/login');
}

module.exports = { userSignUp, userLogIn, userLogOut };