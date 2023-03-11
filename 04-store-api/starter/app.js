const express = require('express');
const connectDB = require('./db/connect');
require('express-async-errors'); // $ this is replacement of the Async wrapper we had in teh previous project
require('dotenv').config();
const productsRouter = require('./routes/products');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();
const { PORT = 5000, MONGO_URI = '' } = process?.env || {};

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, console.log(`Listening at port: ${PORT}!`));
  } catch (error) {
    console.error(error);
  }
};

app.get('/', (req, res) => {
  res.send(`<div style="display: grid; place-items: center; font-family: sans serif;">
    <p style="font-size: 3rem">Store API!&nbsp;<a href='/api/v1/products'>products route</a></p>
  </div>`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/products', productsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

start();
