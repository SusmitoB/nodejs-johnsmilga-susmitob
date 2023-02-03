function authorize(req, res, next) {
  console.log('I am from the authorize!');
  next();
}

module.exports = authorize;
