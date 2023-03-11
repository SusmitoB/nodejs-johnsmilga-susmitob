const connectDB = require('./db/connect');
require('dotenv').config();
const ProductSchema = require('./models/product');
const productsJSON = require('./products.json');

const createData = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await ProductSchema.deleteMany();
    await ProductSchema.create(productsJSON);
    console.log('Success!');
    process.exit(0); // * exit with success
  } catch (error) {
    console.log(error);
    process.exit(1); // * exit with failure
  }
};

createData();
