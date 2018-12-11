import createElement from 'virtual-dom/create-element';
import { diff, patch } from 'virtual-dom';
import app from './screens/App'
import update from './reducers/index'


function render(update, app, node) {
  let state = update({}, 'INIT')
  let currentView = app(dispatch, state)
  let rootNode = createElement(currentView)
  node.appendChild(rootNode)
  function dispatch(action) {
    state = update(state, action)
    const updatedView = app(dispatch, state)
    const patches = diff(currentView, updatedView)
    rootNode = patch(rootNode, patches)
    currentView = updatedView
  }
}

const rootNode = document.getElementById('app');

render(update, app, rootNode)
