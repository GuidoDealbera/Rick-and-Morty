const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async(req, res) => {
try {
    const {id} = req.params;
    const response = await axios(URL + id);
    const {name, image, species, gender} = response.data
    const obj = {
        id,
        name,
        species,
        image,
        gender,
    }  
    res.json(obj);
} catch (error) {
    res.json(500, {error: error.message})
}
};

module.exports = {getCharById};