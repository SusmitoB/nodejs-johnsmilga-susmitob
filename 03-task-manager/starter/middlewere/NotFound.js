const NotFound = (req, res) =>
  res
    .status(404)
    .send('<h1 style="font-family: sans-serif; margin: 0 auto; width: 300px"><strong>404</strong>&nbsp;Invalid request!</h1>');

module.exports = NotFound;
