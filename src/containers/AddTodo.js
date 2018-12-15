import { connect } from '../utils/connect'
import { addTodo } from '../actions'
import { AddTodo } from '../components/AddTodo'
import { getInputValueFromId } from '../utils/ref'

const mapStateToProps = state => { }

const mapDispatchToProps = dispatch =>
    ({
        onclick: () =>
            dispatch(addTodo(getInputValueFromId('todo')))

    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)

