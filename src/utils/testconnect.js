import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { compose } from 'ramda-x'

const { div, button, pre, input, ul, li } = hh(h);


const getVisibleTodos = ({ todos, visibilityFilter: filter }) =>
    filter === 'SHOW_ALL'
        ? todos
        : filter === 'SHOW_COMPLETED'
            ? todos.filter(td => td.completed)
            : filter === 'SHOW_ACTIVE'
                ? todos.filter(td => !td.completed)
                : todos

const todoListNew = ({ state, onTodoClick }) => {

    return div({}, [
        pre({}, JSON.stringify(state))
    ])

}

const mapStateToProps = state => {
    return { todos: getVisibleTodos(state) }
}



const mapDispatchToProps = dispatch => ({
    onTodoClick: id => {
        dispatch({
            type: 'TOGGLE_TODO',
            id
        })
    }
})

const testconnect = fn =>
    fn(mapStateToProps, mapDispatchToProps)(todoListNew)


export default testconnect