import hh from 'hyperscript-helpers'
import { h } from 'virtual-dom'
import footer from './Filter'
import addTodoView from './AddTodo'
import todoList from './TodoList'


const { div, pre } = hh(h);


const app = dispatch => state =>
    div([
        addTodoView(state)(dispatch),
        todoList(state)(dispatch),
        footer(state)(dispatch),
        pre({}, JSON.stringify(state, null, 4)),
    ])


export default app