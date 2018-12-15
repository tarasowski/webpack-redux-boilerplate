import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { Component } from '../components/Component'
import { connect } from '../utils/connect'

const { div, button, pre, input, ul, li } = hh(h);

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


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

