import { combineReducers } from '../utils/combine-reducers'
import { todos, visibilityFilter } from '../reducers/index'

const store = combineReducers({
    todos: todos, // key = state field, value = reducer function
    visibilityFilter: visibilityFilter, // key = state field, value = reducer function
})

export default store