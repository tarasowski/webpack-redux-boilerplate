import createElement from 'virtual-dom/create-element';
import { diff, patch } from 'virtual-dom';
import view from './container/App'
import update from './reducers/index'
import testconnect from './utils/testconnect'
import { connect } from './utils/connect'



function render(update, view, connect, testconnect, node) {
  let state = update({})('INIT')
  let currentView = view(dispatch)(state)
  let rootNode = createElement(currentView)
  node.appendChild(rootNode)

  function dispatch(action) {
    state = update(state)(action)
    const updatedView = view(dispatch)(state)
    const patches = diff(currentView, updatedView)
    rootNode = patch(rootNode, patches)
    currentView = updatedView
  }
}

const rootNode = document.getElementById('app')


render(update, view, connect, testconnect, rootNode)

