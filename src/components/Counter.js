import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { increment, decrement } from '../actions/index'

const { div, button, pre } = hh(h);

function counter(dispatch, model) {
    return div([
        div({ className: 'mv2' }, `Count: ${model.counter}`),
        button({
            className: 'pv1 ph2 mr2',
            onclick: () => dispatch(increment())
        }, '+'),
        button({
            className: 'pv1 ph2',
            onclick: () => dispatch(decrement())
        }, '-'),
    ]);
}

export default counter