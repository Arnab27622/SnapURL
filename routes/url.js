const express = require('express');
const router = express.Router();
const { createShortURL, getOriginal } = require('../controllers/url.js');

router.post('/', createShortURL);
router.get('/:id', getOriginal);

module.exports = router;