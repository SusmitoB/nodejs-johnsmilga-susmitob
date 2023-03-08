const { CustomErrorAPI } = require('../errors/customError');

const ErrorHandlerMiddlewere = (err, req, res, next) => {
  if (err instanceof CustomErrorAPI) return res.status(err.status).send(err.message);
  return res.status(err.status || 500).json({ message: err.message || 'Something went wrong, please try again' });
};

module.exports = ErrorHandlerMiddlewere;
