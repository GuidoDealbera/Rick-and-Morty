const express = require('express')
const server = express()
const router = require('./routes/index')
const cors = require('cors')
const favsRouter = require('./routes/favsRouter')
const {sequelize} = require('./DB_connection')
const {saveApiData} = require('./controllers/saveApiData')

server.use(express.json())
server.use(cors())
server.use('/rickandmorty', router)
server.use('/favs', favsRouter)

server.listen(3001, ()=>{
    console.log('listening on port 3001')
    sequelize.sync({force:true})
    saveApiData()
})


module.exports = server