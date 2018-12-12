import createElement from 'virtual-dom/create-element';
import { diff, patch } from 'virtual-dom';
import app from './container/App'
import todoApp from './reducers/index'


function render(update, view, node) {
  let state = update({})('INIT')
  let currentView = view(dispatch)(state)
  let rootNode = createElement(currentView)
  node.appendChild(rootNode)
  function dispatch(action) {
    console.log(state)
    state = update(state)(action)
    const updatedView = view(dispatch)(state)
    const patches = diff(currentView, updatedView)
    rootNode = patch(rootNode, patches)
    currentView = updatedView
  }
}

const rootNode = document.getElementById('app');

render(todoApp, app, rootNode)
