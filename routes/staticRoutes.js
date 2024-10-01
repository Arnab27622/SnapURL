const express = require('express');
const router = express.Router();
const { getHomePage, getSignUpPage, getLoginPage } = require('../controllers/static.js');

router.get('/', getHomePage);
router.get('/signup', getSignUpPage);
router.get('/login', getLoginPage);

module.exports = router;