'use strict'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
} from '../actions/index'


const todo = (state = {}) => action => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false,
            }
        case TOGGLE_TODO:
            return state.id === action.id
                ? { ...state, completed: !state.completed }
                : state
        default:
            return state
    }
}

export const todos = (state = []) => action => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, todo(state)(action)]
        case TOGGLE_TODO:
            return state.map(td => todo(td)(action))
        default:
            return state
    }
}

export const visibilityFilter = (state = 'SHOW_ALL') => action => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

