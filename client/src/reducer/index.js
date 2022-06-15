
const initialState = {
    pokemons : [],
    allPokemons : [],
    types: [],
    detail: []
}


function rootReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_POKEMONS': 
            return {
                ...state,
                pokemons : action.payload,
                allPokemons : action.payload,
                
            }
            
         case 'FILTER_BY_TYPE':
            var allPokemons = state.allPokemons
            const typeFiltered = action.payload === 'all' ? allPokemons : allPokemons.filter(e => e.types.includes(action.payload))

            return {
                ...state,
                pokemons: typeFiltered
            }
        case 'FILTER_BY_DB':
            var allPokemons = state.allPokemons
            var dbFiltered = []
            if (action.payload === 'all') {
                dbFiltered = allPokemons 
            } else if (action.payload === 'db'){
                dbFiltered = allPokemons.filter(e => e.creadoEnDb)
            } else {
                dbFiltered = allPokemons.filter(e => !e.creadoEnDb)
            }

            return {
                ...state,
                pokemons: dbFiltered
            }

        case 'ORDER_BY_AZ':
            let sortedArrByAz = action.payload === 'asc' ?

            state.pokemons.sort(function (a, b){
                if (a.name > b.name) {
                    return 1
                }
                if (a.name < b.name) {
                    return -1
                }
                return 0
            }) : 
            state.pokemons.sort(function (a, b){
                if (a.name < b.name) {
                    return 1
                }
                if (a.name > b.name) {
                    return -1
                }
                return 0
            })
            return {
                ...state,
                pokemons: sortedArrByAz
            }

        case 'ORDER_BY_ATTACK':
            let sortedArr = action.payload === 'desc' ?
            

            state.pokemons.sort(function(a, b){
                return a.attack - b.attack
            })  :
            state.pokemons.sort(function(a, b){
                return b.attack - a.attack
            })
            

            
            
            return {
                ...state,
                pokemons: sortedArr
            }
        
        case 'GET_POKEMON_NAME':
            return {
                ...state,
                pokemons: action.payload
            }

        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload

            }

        case 'POST_POKEMON':
            return {
                ...state
            }

        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }


                
            default: 
            return state
    }

}

export default rootReducer