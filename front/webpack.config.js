const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const base = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: '[name]'
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
  plugins: [
    new UglifyJsPlugin(),
  ]
}


module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    return merge(base, prod)
  }

  return merge(base, dev)
}
