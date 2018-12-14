import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, button, pre, input, ul, li } = hh(h);

const todoListNew = ({ state, onTodoClick }) => {

    return div({}, [
        pre({}, JSON.stringify(state))
    ])

}

export default todoListNew