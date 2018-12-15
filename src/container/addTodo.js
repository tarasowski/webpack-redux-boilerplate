import { connect } from '../utils/connect'
import { addTodoText, addTodo } from '../actions/'
import { AddTodo } from '../components/AddTodo'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch =>
    ({
        oninput: e =>
            dispatch(addTodoText(e.target.value)),
        onclick: state =>
            dispatch(addTodo(state))

    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)

