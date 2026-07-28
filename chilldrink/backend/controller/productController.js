const db = require("../config/db");

const getProduct = (req, res) => {
  db.query("SELECT * FROM product", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

module.exports = { getProduct };