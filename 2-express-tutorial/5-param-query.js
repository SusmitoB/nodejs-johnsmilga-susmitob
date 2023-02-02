const express = require('express');
const { products } = require('./data');
const app = express();

// $ https://hn.algolia.com/api (hacker news algolia api)

const PORT = 5000;

app.listen(PORT, () => {
  console.log('express server is up on port 5000!');
});

app.get('/', (req, res) => {
  res.send('<h1>Hey there! See our <strong><a href="/api/products">products.</a></strong></h1>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map(({ id, name, price }) => ({
    id,
    name,
    price,
  }));
  res.json(newProducts);
});

app.get('/api/products/:uid', (req, res) => {
  const { uid } = req.params;
  const foundProduct = products.find(({ id }) => id + '' === uid);
  const responseJson = foundProduct ? foundProduct : [{ error: 'Wrong id!' }];
  res.status(foundProduct ? 200 : 404).json(responseJson);
});

// $ all the query params will be available inside the req.params object
app.get('/api/products/:uid/reviews/:reviewID/:uniqueID', (req, res) => {
  console.log({ params: req.params }); // * { params: { uid: '1', reviewID: '35135143', uniqueID: 'jasdgjsagd' } }
  res.status(404).send('No data found!');
});

// $ query params
// * I used 'api/v1/products' instead of '/api/v1/products' and the route was not working
app.get('/api/v1/products', (req, res) => {
  const { productID, maxPrice } = req.query;
  // * if no query asked pass the whole json
  if (!productID && !maxPrice) return res.json(products);

  // * if product id given then pass the particular product
  if (productID) {
    const foundProduct = products.find(({ id }) => id + '' === productID);
    const responseJson = foundProduct ? foundProduct : [{ error: 'Wrong id!' }];
    return res.status(foundProduct ? 200 : 404).json(responseJson);
  }

  // * if maxPrice is given, pass the products having less or equal the price
  const filteredProducts = products.filter(({ price }) => Number(price) <= maxPrice);
  const responseJson = filteredProducts.length ? filteredProducts : [{ error: 'Wrong id!' }];
  return res.status(filteredProducts.length ? 200 : 404).json(responseJson);
});
