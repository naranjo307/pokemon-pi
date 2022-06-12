const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ('axios')
const {Pokemon, Type} = require('../db')

const router = Router();

var p1 = 'sprites'
var p2 = 'other'
var p3 = 'official-artwork'

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
    const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    const apiInfo = await apiUrl.data.results
    let pokemons = []
      
        for (i=0; i<apiInfo.length; i++) {
            if (apiInfo[i].url) {
                const pokemonInfo = await axios.get(`${apiInfo[i].url}`)
                const thisPokemon = await pokemonInfo.data
                pokemons.push({
                    id: thisPokemon.id,
                    name: thisPokemon.name,
                    types: thisPokemon.types.map(e => e.type.name),
                    hp: thisPokemon.stats[0].base_stat,
                    attack: thisPokemon.stats[1].base_stat,
                    defense: thisPokemon.stats[2].base_stat,
                    speed: thisPokemon.stats[5].base_stat,
                    height: thisPokemon.height,
                    weight: thisPokemon.weight,
                    image: `${thisPokemon[p1][p2][p3].front_default}`

                })
            }

        }
      
       
    return pokemons
}

const getDbInfo = async () => {
    return await Pokemon.findAll({
        include:{
            model: Type,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
}

const getAllPokemons = async () => {
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()
    const infoTotal = apiInfo.concat(dbInfo.map(e => e.dataValues))
    const infoTotal2 = infoTotal.map(e => {
        if (e.creadoEnDb){
        e.types = e.types.map(e => e.name)
        return e

    } else return e
})
    console.log(infoTotal2)
    return infoTotal2

}

router.get('/pokemons', async (req, res) => {
    const name = req.query.name
    let pokemonsTotales = await getAllPokemons()
    if (name) {
        let pokemonName = await pokemonsTotales.filter(e => e.name.toLowerCase()===(name.toLowerCase()))
        pokemonName.length ?
        res.status(200).send(pokemonName) :
        res.status(404).send('no existe el pokemon')
    } else {
        res.status(200).send(pokemonsTotales)
    }
})

router.get('/types', async (req, res) => {
    const typesApi = await axios.get('https://pokeapi.co/api/v2/type')
    types = typesApi.data.results.map(e => e.name)
    types.forEach(e => {
        Type.findOrCreate({
            where: {name: e}
        })
    });
    const allTypes = await Type.findAll()
    res.send(allTypes)
})

router.post('/pokemons', async (req, res) => {
    
 let {
     name,
     types,
     hp,
     attack,
     defense,
     speed,
     height,
     weight,
     image,
     creadoEnDb
    } = req.body
try {
    let pokemonCreado = await Pokemon.create ({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        image,
        creadoEnDb
    })

    let tiposDb = await Type.findAll({  where: { name : types } })
    
    pokemonCreado.addType(tiposDb)
    res.send('pokemon creado')


} catch (error){
    res.status(400).json({ error: error})
}


})

router.get('/pokemons/:id', async (req, res) => {
    const id = req.params.id
    try {
    const pokemonesTotales = await getAllPokemons()
    if (id) {
        let pokemonId = await pokemonesTotales.filter( e => e.id == id)
        pokemonId.length?
        res.status(200).json(pokemonId) :
        res.status(404).send('pokemon no encontrado')
    } 
    } catch (error){
        res.status(400).json({ error: error})
    }
})

module.exports = router;
