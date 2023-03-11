const ProductSchema = require('../models/product');

const getAllProducts = (req, res) => {
  res.status(200).json({ id: 1, name: 'Mac book pro' });
};

const getProductsByQuery = async (req, res) => {
  const products = await ProductSchema.find(req?.query);
  res.status(200).json({ products, nbOfHits: products.length });
};

module.exports = { getAllProducts, getProductsByQuery };
