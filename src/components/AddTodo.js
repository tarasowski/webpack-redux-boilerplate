import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, input, button } = hh(h);

export const AddTodo = ({ dispatch: { onclick } }) => {
    return div({}, [
        input({
            type: 'text',
            name: 'todo',
            id: 'todo',
        }),
        button({
            type: 'submit',
            onclick
        }, 'Add Todo')
    ])
}


