let {favorites} = require('../utils/favs');

const getFavs = (req, res) => {
    try {
        res
            .status(200)
            .json(favorites)
    } catch (error) {
        res.json(500, {error: error.message})
    }
};

module.exports = {getFavs};