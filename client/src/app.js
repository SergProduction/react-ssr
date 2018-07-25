import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Helmet from 'react-helmet'

// import { tap } from 'ramda'


// var sayX = x => console.log('x is ' + x)
// tap(sayX, 50)


import Menu from './pages/menu'
import Sports from './pages/sports'
import Counter from './pages/counter'
import NotFound from './pages/not-found'

/* 
const DinamicImport = Loadable({
  loader: () => import('./pages/dinamic-import'),
  loading: () => <div>Load ...</div>,
  serverSideRequirePath: path.join(__dirname, './pages/dinamic-import'),
})
 */

export default () => (
  <Fragment>
    <Helmet
      htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
      titleTemplate="%s | React SSR IN NODE JS"
      titleAttributes={{itemprop: "name", lang: "en"}}
      meta={[
        {name: "description", content: "Server side rendering example"},
        {name: "viewport", content: "width=device-width, initial-scale=1"},
      ]}
    />
    <Menu/>
    <Switch>
      <Route exact path="/sports" component={Sports} />
      <Route exact path="/counter" component={Counter} />
      {/* <Route exact path="/page3" component={DinamicImport} /> */}
      <Route component={NotFound} />
    </Switch>
  </Fragment>
)