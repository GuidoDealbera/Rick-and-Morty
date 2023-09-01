let {favorites} = require('../utils/favs');

const deleteFavs = (req, res) => {
    try {
        const {id} = req.params;
        const favoritesFiltered = favorites.filter((favorito) => 
            favorito.id !== Number(id)

        );
        favorites = favoritesFiltered;
        res.json(favorites);
    } catch (error) {
        res.json(500, {error: error.message})
    }
};

module.exports = {deleteFavs};