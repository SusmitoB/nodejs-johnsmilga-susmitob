// $ goal
// * check userName and password. If it exists in the database then create new JWT
// * send this back to the Frontend
// * setup authentication - if request has this token, let the user access the app
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { CustomAPIError } = require('../errors/custom-error');

const login = async (req, res) => {
  console.log(req.body);
  if (!req.body?.username || !req.body?.password) {
    const status = 400;
    const message = 'It is a bad request! Please give both username and password to continue!';
    throw new CustomAPIError(message, status);
  }
  const token = jwt.sign({ username: req.body.username, id: new Date().getDate() }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  res.status(200).send({ token, msg: 'login is sucessful!' });
};

const dashboard = async (req, res) => {
  console.log({ authorization: req.headers.authorization });
  res.status(200).json({ msg: 'Hey Susmito! Here is your information as an authenticated user!' });
};

module.exports = { login, dashboard };
