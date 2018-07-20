import Koa from 'koa'
import ReactDOMServer from 'react-dom/server'


const app = new Koa()


app.use(async ctx => {
  ctx.body = 'Hello World'
})


app.listen(3000)