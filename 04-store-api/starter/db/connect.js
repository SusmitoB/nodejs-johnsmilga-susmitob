const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

// * useCreateIndex and useFindAndModify are not supported in the mongoose ver 7

module.exports = connectDB;
