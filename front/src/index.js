import React, { Fragment } from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './app'


const AppBrowser = () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)


export default hydrate(
  <AppBrowser />,
  document.getElementById('root')
)