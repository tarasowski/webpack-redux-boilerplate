import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import footer from '../components/Filter'
import todoList from '../components/TodoList'
import todoListNew from '../components/TodoListNew'
import { submit, inputField } from '../components/AddTodo'
import { addTodoText, addTodo, toggleTodo, setVisiblityFilter } from '../actions/'


const { div, pre, input, button } = hh(h);


const getVisibleTodos = ({ todos, visibilityFilter: filter }) =>
    filter === 'SHOW_ALL'
        ? todos
        : filter === 'SHOW_COMPLETED'
            ? todos.filter(td => td.completed)
            : filter === 'SHOW_ACTIVE'
                ? todos.filter(td => !td.completed)
                : todos

const mapStateToProps = state => ({
    todos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
    onTodoClick: id => {
        dispatch({
            type: 'TOGGLE_TODO',
            id
        })
    }
})


const app = dispatch => state => connect =>
    div([
        inputField(e =>
            dispatch(
                addTodoText(e.target.value))),
        submit(() =>
            dispatch(
                addTodo(state))),
        todoList(id =>
            dispatch(
                toggleTodo(id))
        )(getVisibleTodos(state)),
        footer(filter =>
            dispatch(
                setVisiblityFilter(filter)
            ))(state),
        pre({}, JSON.stringify(state, null, 4)),
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(todoListNew)
    ])


export default app