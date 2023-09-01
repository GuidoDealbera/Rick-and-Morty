let { favorites } = require("../utils/favs");
const postFavs = (req, res) => {
  try {
    favorites.push(req.body);
    res.status(200).json(favorites);
  } catch (error) {
    res.json(500, { error: error.message });
  }
};

module.exports = { postFavs };
