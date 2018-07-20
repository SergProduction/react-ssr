import React from 'react'
import { render } from 'react-dom'
// import { } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'


import Page1 from './page1'
import Page2 from './page2'
import NotFound from './not-found'
import Main from './main'



const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2} />
    </div>
  </BrowserRouter>
)


export default render(
  <App />,
  document.getElementById('root')
)