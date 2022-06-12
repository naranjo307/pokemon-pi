import axios from 'axios'

export function getPokemons() {
    return async function(dispatch){
        try {
         var json = await axios.get('http://localhost:3001/pokemons')
         return dispatch({
            type: 'GET_POKEMONS',
            payload: json.data
         })
         
        } catch (error) {
            console.log(error.message)
            return alert ('todo mal')
        }
    }
}

export function getPokemonName (name){
    return async function (dispatch) {
        try {
          var json2 = await axios.get('http://localhost:3001/pokemons?name=' + name)
          return dispatch({
            type: 'GET_POKEMON_NAME',
            payload: json2.data
          })
        } catch (error) {
            console.log(error)
        }

    }
}

export function getTypes () {
    return async function (dispatch) {
        var info = await axios.get('http://localhost:3001/types', {

        })
        return dispatch ({
            type: 'GET_TYPES',
            payload: info.data
        })
    }

}

export function postPokemon (payload) {
    return async function (dispatch) {
        var info = await axios.post('http://localhost:3001/pokemons', payload)
        return payload
    }

}


export function filterPokemonsByType(payload) {
    return {
        type: 'FILTER_BY_TYPE',
        payload
    }
}

export function filterPokemonsByDb(payload) {
    return {
        type: 'FILTER_BY_DB',
        payload
    }
}

export function orderByAttack(payload) {
    return {
        type: 'ORDER_BY_ATTACK',
        payload
    }
}
