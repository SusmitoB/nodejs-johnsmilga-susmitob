const mongoose = require('mongoose');

const connectDB = (connectionString) =>
  mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  });

module.exports = connectDB;
