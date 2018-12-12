'use strict'
import { ADD, SUBTRACT, ADD_PLAYER, REMOVE_PLAYER } from '../actions/index'
import expect from 'expect'
import deepFreeze from '../../node_modules/deep-freeze'
import { combineReducers } from '../utils/combine-reducers'

const todo = (state = {}) => action => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false,
            }
        case 'TOGGLE_TODO':
            return state.id === action.id
                ? { ...state, completed: !state.completed }
                : state
        default:
            return state
    }
}

const temp = (state = {}) => action => {
    switch (action.type) {
        case 'ADD_TODO_TEXT':
            return { ...state, todoText: action.text }
        default:
            return state
    }
}

const todos = (state = []) => action => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, todo(state)(action)]
        case 'TOGGLE_TODO':
            return state.map(td => todo(td)(action))
        default:
            return state
    }
}

const visibilityFilter = (state = 'SHOW_ALL') => action => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}


const todoApp = combineReducers({
    todos: todos, // key = state field, value = reducer function
    visibilityFilter: visibilityFilter, // key = state field, value = reducer function
    temp: temp
})

export default todoApp