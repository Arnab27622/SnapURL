const express = require('express');
const { userSignUp, userLogIn, userLogOut } = require('../controllers/user.js');

const router = express.Router();

router.route('/').post(userSignUp);
router.route('/login').post(userLogIn);
router.route('/logout').get(userLogOut);

module.exports = router;