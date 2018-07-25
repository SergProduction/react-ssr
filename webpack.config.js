const path = require('path')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')

const clientConfig = require('./client/webpack.config')


const clientConfigDir = merge(clientConfig, {
  name: 'client',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: 'index.js',
  }
})

const base = [clientConfigDir, {
  mode: 'development',
  name: 'server',
  target: 'async-node',
  entry: {
    server: path.resolve(__dirname, './server/index.js'),
    // client: path.resolve(__dirname, './client/src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules\/)/,
        loader: 'babel-loader'
      }
    ]
  }
}]



const mode = (env, argv) => {
  /* 
  if (argv.mode === 'production') {
    return merge(base, prod)
  }
  
  if (argv.mode === 'server') {
    return merge(base, serv)
  }
  */
 return base
}

module.exports = mode(process.env.NODE_ENV)