import { createStore, applyMiddleware, compose } from 'redux'
import Thunk from 'redux-thunk'
import reducer, { initState } from './reducer'

const devTool = () => {
  try {
    return window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  }
  catch (error) {
    return f => f
  }
}

export default () => createStore(
  reducer,
  initState,
  compose(
    applyMiddleware(Thunk),
    devTool(),
  )
)
