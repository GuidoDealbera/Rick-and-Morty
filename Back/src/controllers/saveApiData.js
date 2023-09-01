const axios = require('axios')
const {character} = require('../DB_connection')
let URL = "https://rickandmortyapi.com/api/character"

const getApiData = async () => {
    try {
        let character = []
        for (let i = 0; i < 5; i++) {
            const result = await axios(URL)
            const pj = result.data.results
            character.push(...pj)
            URL = result.data.info.next
        }
        const format = character.map(e=>{
            return {
                id: e.id,
                name: e.name,
                species: e.species,
                origin: e.origin,
                gender: e.gender,
                status: e.status,
                image: e.image,
            }
        })
        return format
    } catch (error) {
        return {error: error.message}
    }
}

const saveApiData = async () => {
    try {
        const allCharacters = await getApiData()
        await character.bulkCreate(allCharacters)
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {getApiData, saveApiData}