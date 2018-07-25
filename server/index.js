import path from 'path'
import fs from 'fs'
import Koa from 'koa'
import stat from 'koa-static'
import cookie from 'koa-cookie'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'
import webpack from 'webpack'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'

import ClientApp from '../client/src/app'
import configureStore from '../client/src/redux/configure-store'
import webpackConfig from '../client/webpack.config'
import template from './template'



const app = new Koa()


app.use(cookie())


if (process.env.NODE_ENV === 'development') {
  const compile = webpack(webpackConfig)
  app.use(devMiddleware(compile))
}

if (process.env.NODE_ENV === 'production') {
  app.use(stat(__dirname + '/client'))
}

console.log(__dirname + 'client')

app.use(async (ctx, next) => {

  const context = {}

  const store = configureStore()

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={ ctx.url } context={ context }>
        <ClientApp />
      </StaticRouter>
    </Provider>
  )

  const helmet = Helmet.renderStatic()

  ctx.body = template({ html, helmet })

  // await next()
})

app.use(async ctx => {
  ctx.body = 'Hello World'
})


app.listen(3000)