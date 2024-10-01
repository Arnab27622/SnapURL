const URL = require('../models/url.js');

async function getHomePage(req, res) {
    const user = req.user
    if (!user) {
        return res.redirect('/login');
    }
    
    const allUrls = await URL.find({ createdBy: req.user._id });
    return res.render('homepage', {
        urls: allUrls,
        user
    });
};

async function getSignUpPage(req, res) {
    return res.render('signup');
}
async function getLoginPage(req, res) {
    return res.render('login');
}

module.exports = { getHomePage, getSignUpPage, getLoginPage };