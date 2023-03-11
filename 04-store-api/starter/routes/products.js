const express = require('express');
const { getProductsByQuery } = require('../controllers/products');
const router = express.Router();

router.route('/').get(getProductsByQuery);

module.exports = router;
