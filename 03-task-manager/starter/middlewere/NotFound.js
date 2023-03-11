const NotFound = (req, res) => {
  const error = new Error();
  error.status = 404;
  error.message =
    '<div style="font-family: sans-serif; text-align: center; margin: 0 auto; width: 300px"><h1 style="font-size: 2rem"><strong>404</strong>&nbsp;Invalid request!</h1><p><a href="/">Go to tasks!</a></p></div>';
  // res
  //   .status(404)
  //   .send('<h1 style="font-family: sans-serif; margin: 0 auto; width: 300px"><strong>404</strong>&nbsp;Invalid request!</h1>');
  res.status(error.status).send(error.message);
};

module.exports = NotFound;
