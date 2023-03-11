const getAllProducts = (req, res) => {
  throw new Error('G marale@!');
  res.status(200).json({ id: 1, name: 'Mac book pro' });
};

module.exports = { getAllProducts };
