// $ goal
// * check userName and password. If it exists in the database then create new JWT
// * send this back to the Frontend
// * setup authentication - if request has this token, let the user access the app
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { CustomAPIError } = require('../errors');

const login = async (req, res) => {
  if (!req.body?.username || !req.body?.password) {
    const status = 400;
    const message = 'It is a bad request! Please give both username and password to continue!';
    throw new CustomAPIError(message, status);
  }

  // * we should not pass any password in the jwt token anybody who has this token can decode and see the payload so be cautious about that
  // * here we are just passing an id
  const token = jwt.sign({ username: req.body.username, id: new Date().getDate() }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  res.status(200).send({ token, msg: 'login is sucessful!' });
};

const dashboard = async (req, res) => {
  const { username, id } = req.user;
  res.status(200).json({ msg: `Hey ${username}! Here is your id: ${id}!` });
};

module.exports = { login, dashboard };
