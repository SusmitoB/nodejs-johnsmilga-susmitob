const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'product price must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: String,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'marcos', 'caressa'],
      message: '{VALUE} is not supported!',
    },
    // enum: ['ikea', 'liddy', 'marcos', 'caressa'],
  },
});

// $ 'product' is the collection name
module.exports = mongoose.model('product', productSchema);
