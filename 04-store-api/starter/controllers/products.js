const getAllProducts = (req, res) => {
  res.status(200).json({ id: 1, name: 'Mac book pro' });
};

module.exports = { getAllProducts };
