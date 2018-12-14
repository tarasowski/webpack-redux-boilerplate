import createElement from 'virtual-dom/create-element';
import { diff, patch } from 'virtual-dom';
import app from './container/App'
import todoApp from './reducers/index'


const connect = state => dispatch => (...fns) => component =>
  component(fns.reduce((a, c) => ({ ...{ state: a(state) }, ...{ dispatch: c(dispatch) } })))


function render(update, view, node) {
  let state = update({})('INIT')
  let currentView = view(dispatch)(state)(null)
  let rootNode = createElement(currentView)
  node.appendChild(rootNode)
  function dispatch(action) {
    state = update(state)(action)
    const initconnect = connect(state)(dispatch)
    const updatedView = view(dispatch)(state)(initconnect)
    const patches = diff(currentView, updatedView)
    rootNode = patch(rootNode, patches)
    currentView = updatedView
  }
}

const rootNode = document.getElementById('app');

render(todoApp, app, rootNode)
