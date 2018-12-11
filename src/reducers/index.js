import { ADD, SUBTRACT, ADD_PLAYER, REMOVE_PLAYER } from '../actions/index'
import { combineReducers } from '../utils/combine-reducers'

const counter = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        case SUBTRACT:
            return state - 1;
        default:
            return state;
    }
}

const players = (state = [], action) => {
    switch (action.type) {
        case ADD_PLAYER:
            return [...state, { name: action.playload.name, id: action.payload.id }]
        case REMOVE_PLAYER:
            return [...state.filter(p => p.id !== action.payload)]
        default:
            return state;
    }
}


const update = combineReducers({
    counter,
    players
})

export default update