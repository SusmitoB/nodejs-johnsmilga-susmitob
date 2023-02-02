function logger({ url, method }, res, next) {
  console.log({ url, method });
  next();
}

module.exports = logger;
