import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import footer from '../components/Filter'
import todoList from '../components/TodoList'
import { submit, inputField } from '../components/AddTodo'

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
        inputField(e =>
            dispatch({
                type: 'ADD_TODO_TEXT',
                text: e.target.value,
            })),
        submit(() =>
            dispatch({
                type: 'ADD_TODO',
                id: state.todos.length,
                text: state.temp.todoText,
            })),
        todoList(id =>
            dispatch({
                type: 'TOGGLE_TODO',
                id
            }))(getVisibleTodos(state)),
        footer(filter =>
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter
            }))(state),
        pre({}, JSON.stringify(state, null, 4))
    ]);


export default app