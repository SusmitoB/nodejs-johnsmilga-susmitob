const express = require('express');
const { getProductsByQuery, getAllProductsStatic } = require('../controllers/products');
const router = express.Router();

router.route('/').get(getProductsByQuery);
router.route('/static').get(getAllProductsStatic);

module.exports = router;
