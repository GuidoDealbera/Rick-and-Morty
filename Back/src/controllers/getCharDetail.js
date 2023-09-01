const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios')
async function getCharDetail(req, res) {
  const { detailId } = req.params;
  try {
    const response = await axios(URL + detailId)
      const character = {
        id: response.data.id,
        name: response.data.name,
        species: response.data.species,
        image: response.data.image,
        gender: response.data.gender,
        origin: response.data.origin,
      }
      res.status(200).json(character)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = getCharDetail;
