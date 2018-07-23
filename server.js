import Koa from 'koa'
import stat from 'koa-static'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'

import App from './front/src/app'
import configureStore from './front/src/redux/configure-store'

import template from './template'


const app = new Koa()

app.use(stat(__dirname + '/front/dist'))

app.use(async (ctx, next) => {

  const context = {}

  const store = configureStore()

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={ ctx.url } context={ context }>
        <App />
      </StaticRouter>
    </Provider>
  )

  ctx.body = template({ html })

  // await next()
})

app.use(async ctx => {
  ctx.body = 'Hello World'
})


app.listen(3000)