import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import footer from '../components/Filter'
import todoList from '../components/TodoList'
import { submit, inputField } from '../components/AddTodo'
import { addTodoText, addTodo, toggleTodo, setVisiblityFilter } from '../actions/'
import Container from './container'
import addTodoView from './addTodo'


const { div, pre, input, button } = hh(h);

const getVisibleTodos = ({ todos, visibilityFilter: filter }) =>
    filter === 'SHOW_ALL'
        ? todos
        : filter === 'SHOW_COMPLETED'
            ? todos.filter(td => td.completed)
            : filter === 'SHOW_ACTIVE'
                ? todos.filter(td => !td.completed)
                : todos


const app = dispatch => state =>
    div([
        addTodoView(state)(dispatch),
        todoList(id =>
            dispatch(
                toggleTodo(id))
        )(getVisibleTodos(state)),
        footer(filter =>
            dispatch(
                setVisiblityFilter(filter)
            ))(state),
        pre({}, JSON.stringify(state, null, 4)),
        Container(state)(dispatch)
    ])


export default app