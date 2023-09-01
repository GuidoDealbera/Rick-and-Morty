const server = require('../server')
const session = require('supertest')
const agent = session(server)

describe('test de RUTAS Onsearch', () => {
    it('Responde con status 200', () => {
       return agent.get('/rickandmorty/onsearch/1').expect(200);
    })
    it('Responde con un objeto con las siguientes propiedades: "id", "name", "species", "gender" e "image"', async ()=>{
        const res = await agent.get('/rickandmorty/onsearch/1')
        expect(res.body).toEqual({id:1,name:"Rick Sanchez",species:"Human",image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg",gender:"Male"});
    })
    it('Si hay un error responde con status: 500', ()=>{
        agend.get('/rickandmorty/onsearch/IDqueNoExiste').expect(500)
    })
})

describe('test de RUTAS Detail', () => {
    it('Responde con status 200', () => {
       return agent.get('/rickandmorty/detail/1').expect(200);
    })
    it('Responde con un objeto con las siguientes propiedades: "id", "name", "species", "gender" e "image"', async ()=>{
        const res = await agent.get('/rickandmorty/detail/1')
        expect(res.body).toEqual({id:1,name:"Rick Sanchez",species:"Human",image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg",gender:"Male"});
    })
    it('Si hay un error responde con status: 500', ()=>{
        agend.get('/rickandmorty/detail/IDqueNoExiste').expect(500)
    })
})