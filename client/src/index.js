import React, { Fragment } from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './app'
import configureStore from './redux/configure-store'


const store = configureStore()

const AppBrowser = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)


export default hydrate(
  <AppBrowser />,
  document.getElementById('root')
)