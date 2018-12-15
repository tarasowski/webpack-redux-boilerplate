import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, pre, input, button } = hh(h);

export const AddTodo = ({ state, dispatch: { oninput, onclick } }) => {
    return div({}, [
        input({
            type: 'text',
            name: 'todo',
            id: 'todo',
            oninput
        }),
        button({
            type: 'submit',
            onclick
        }, 'Add Todo')
    ])
}


