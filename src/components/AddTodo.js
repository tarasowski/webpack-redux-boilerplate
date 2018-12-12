import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, pre, input, button } = hh(h);


export const inputField = oninput =>
    input({
        type: 'text',
        name: 'todo',
        oninput
    })


export const submit = onclick =>
    button({
        type: 'submit',
        onclick,
    }, 'Add todo')

