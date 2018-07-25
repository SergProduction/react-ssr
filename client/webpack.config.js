const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


const base = {
  entry: {
    app: [path.resolve(__dirname, './src/index.js')],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: '[name]',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.ejs')
    })
  ]
}

const dev = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: {
      rewrites: [
        {from: /.*/, to: '/'}
      ]
    }
  }
}

const prod = {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin(),
  ]
}

const serv = {
  mode: 'development'
}


const mode = (env) => {
  if (env === 'production') {
    return merge(base, prod)
  }

  if (env === 'server') {
    return merge(base, serv)
  }

  return merge(base, dev)
}

module.exports = mode(process.env.NODE_ENV)