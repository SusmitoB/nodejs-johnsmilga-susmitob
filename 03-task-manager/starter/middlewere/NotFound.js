const NotFound = (req, res, next) => {
  const error = new Error();
  error.status = 404;
  error.message =
    '<h1 style="font-family: sans-serif; margin: 0 auto; width: 300px"><strong>404</strong>&nbsp;Invalid request!</h1>';
  // res
  //   .status(404)
  //   .send('<h1 style="font-family: sans-serif; margin: 0 auto; width: 300px"><strong>404</strong>&nbsp;Invalid request!</h1>');
  next(error);
};

module.exports = NotFound;
