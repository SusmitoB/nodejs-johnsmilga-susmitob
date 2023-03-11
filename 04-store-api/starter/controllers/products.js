const ProductSchema = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await ProductSchema.find({});
  res.status(200).json({ products, nbOfHits: products.length });
};

const getProductsByQuery = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req?.query;
  const queryObject = {};
  const turnIntoQuery = (str) => str.split(',').join(' ');
  // $ pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  // $

  if (featured) queryObject.featured = featured === 'true';
  if (company) queryObject.company = company;
  if (name) queryObject.name = { $regex: name, $options: 'i' };
  if (numericFilters) {
    const allowedNumericFilters = ['price', 'ratings'];
    const regEx = /\b(<|>|>=|<=|=)\b/g;
    const operatorMap = {
      '>': '$gt',
      '<': '$lt',
      '=': '$eq',
      '>=': '$gte',
      '<=': '$lte',
    };
    const filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);
    filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (allowedNumericFilters.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = ProductSchema.find(queryObject);
  if (sort) result = result.find(turnIntoQuery(sort));

  if (fields) result = result.select(turnIntoQuery(fields));

  if (limit) result = result.limit(limit);

  if (skip) result = result.skip(skip);

  const products = await result;
  res.status(200).json({ products, nbOfHits: products.length });
};

module.exports = { getAllProductsStatic, getProductsByQuery };
