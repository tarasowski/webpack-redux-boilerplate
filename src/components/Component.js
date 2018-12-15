import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, button, pre, input, ul, li } = hh(h);

export const Component = ({ state, onTodoClick }) =>
    div({}, [
        pre({}, JSON.stringify(state))
    ])

