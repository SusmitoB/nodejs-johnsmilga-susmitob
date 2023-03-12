const jwt = require('jsonwebtoken');
require('dotenv').config();
const { BadRequestError, UnauthorizedError } = require('../errors');

const authMiddleware = (req, res, next) => {
  const { authorization: authHeader = '' } = req.headers;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new BadRequestError('No token given in the request headers!');
  }
  try {
    const [, token] = authHeader.split(' ');
    // * we must not use the .decode as it is going to simply just decode the string instead use the .verify so that the data is verified
    // const { username } = jwt.decode(token);
    const { username, id } = jwt.verify(token, process.env.JWT_SECRET);

    // * we are setting the req.user here and the same will be used in the next middleware (eg - dashboard)
    req.user = { username, id };
  } catch (error) {
    throw new UnauthorizedError('Not authorized to access this route!');
  }
  next();
};

module.exports = authMiddleware;
