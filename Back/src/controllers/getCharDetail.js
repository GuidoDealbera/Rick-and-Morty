const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) => {
  try {
    const { detailId } = req.params;
    const response = await axios(URL + detailId);
    return res.json(200, response.data);
  } catch (error) {
    res.json(500, { error: error.message });
  }
};

module.exports = { getCharDetail };
