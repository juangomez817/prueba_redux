
const  createStore  = require("redux").createStore;
const combineReducers = require("redux").combineReducers;


//#### Actions
const Buy_pokemon = "buy_pokemon";
const retur_pokemon = "retur_pokemon";
const Buy_yoshi = "buy_yoshi";
const retur_yoshi = "retur_yoshi";
const Buy_pokemon_action = (cant) => {
    return{
        type: Buy_pokemon,
        payload: cant
    }
}
const retur_pokemon_action = (cant) => {
    return{
        type: retur_pokemon,
        payload: cant
    }
}
const Buy_yoshi_action = (cant) => {
    return{
        type: Buy_yoshi,
        payload: cant
    }
}
const retur_yoshi_action = (cant) => {
    return{
        type: retur_yoshi,
        payload: cant
    }
}

//#### Reducers
const defaul_games_state = {
    pokemon: 10,
    yoshi: 10
}
const games_reducer = (state = defaul_games_state,action) => {
    switch (action.type) {
        case  Buy_pokemon:{
            return{
                ...state,
                pokemon:state.pokemon - action.payload,               
            }
        }
        case Buy_yoshi:{
          return{
             ...state,
           yoshi:state.yoshi - action.payload
        }
       }
        case retur_pokemon:{
            return {
                ...state,
                pokemon:state.pokemon + action.payload,         
            }
        }
        case retur_yoshi: {
            return {
              ...state,
                yoshi:state.yoshi + action.payload
            }
       }
        default: return state;
    }
}

const  defaul_consoles_state ={
    ps5:30,
    swith:30
}
const consoles_reducer = (state = defaul_consoles_state,action) => {
    switch (action.type) {
        case  Buy_pokemon:{
            return{
                ...state,
                pokemon:state.pokemon - action.payload,               
            }
        }
        case Buy_yoshi:{
          return{
             ...state,
           yoshi:state.yoshi - action.payload
        }
       }
        case retur_pokemon:{
            return {
                ...state,
                pokemon:state.pokemon + action.payload,         
            }
        }
        case retur_yoshi: {
            return {
              ...state,
                yoshi:state.yoshi + action.payload
            }
       }
        default: return state;
    }
}
const rootReducers = combineReducers({
    games_reducer,
    consoles_reducer
})

//#### Store
const store = createStore(rootReducers);
console.log("Estado inicial: ", store.getState());
store.subscribe(()=> {
    console.log("Cambio de estado: ",store.getState());
})
 store.dispatch(Buy_pokemon_action(3));
 store.dispatch(retur_pokemon_action(2));
 store.dispatch(Buy_yoshi_action(3));
 store.dispatch(retur_yoshi_action(2));
