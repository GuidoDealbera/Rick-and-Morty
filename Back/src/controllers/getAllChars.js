const {character} = require('../DB_connection')

const getAllChars = async (req, res) => {
    try {
        const aux = await character.findAll()
        res.status(200).json(aux)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getAllChars