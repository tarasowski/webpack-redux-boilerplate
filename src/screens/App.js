import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import counter from '../components/Counter'

const { div, pre } = hh(h);

function app(dispatch, model) {
    return div([
        counter(dispatch, model),
        pre({}, JSON.stringify(model))
    ]);
}

export default app