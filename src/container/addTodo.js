import { connect } from '../utils/connect'
import { addTodoText, addTodo } from '../actions/'
import { AddTodo } from '../components/AddTodo'
import { inputValue } from '../utils/ref'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch =>
    ({
        oninput: e =>
            dispatch(addTodoText(e.target.value)),
        onclick: () =>
            dispatch(addTodo(inputValue('todo')))

    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)

