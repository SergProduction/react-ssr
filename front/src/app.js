import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
// import { tap } from 'ramda'


// var sayX = x => console.log('x is ' + x)
// tap(sayX, 50)


import Menu from './pages/menu'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import NotFound from './pages/not-found'

/* 
const Page3 = Loadable({
  loader: () => import('./pages/page3'),
  loading: () => <div>Load ...</div>,
  serverSideRequirePath: path.join(__dirname, './pages/page3'),
})
 */

export default () => (
  <Fragment>
    <Menu/>
    <Switch>
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2} />
      {/* <Route exact path="/page3" component={Page3} /> */}
      <Route component={NotFound} />
    </Switch>
  </Fragment>
)