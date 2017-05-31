var path = require('path')
var utils = require('./utils')
var config = require('../config')
var webpack = require('webpack')
var vueLoaderConfig = require('./vue-loader.conf')
var svgoConfig = require('../config/svgo-config.json')
var chalk = require('chalk')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
var HappyPack = require('happypack')
  // var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

function createHappyPlugin(id, loaders) {
  return new HappyPack({
    id: id,
    loaders: loaders,
    // threadPool: happyThreadPool,

    // disable happy caching with HAPPY_CACHE=0
    cache: process.env.HAPPY_CACHE !== '0',

    // make happy more verbose with HAPPY_VERBOSE=1
    verbose: process.env.HAPPY_VERBOSE === '1',
  })
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'common': resolve('src/common'),
      'locales': resolve('src/locales'),
      'views': resolve('src/views'),
      'service': resolve('src/service')
    }
  },
  module: {
    noParse: /node_modules\/(element-ui\.js)/,
    rules: [{
        test: /\.svg$/,
        enforce: "pre",
        loader: 'svgo-loader?' + JSON.stringify(svgoConfig)
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
        exclude: /node_modules\/(?!(autotrack|dom-utils))|vendor\.dll\.js/
      }, {
        test: /\.js[x]?$/,
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: 'happypack/loader?id=happybabel'
      }, {
        test: /\.svg$/,
        loader: 'happypack/loader?id=happysvg',
        include: /assets\/icons/
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: /assets\/icons/,
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
      // {
      //   test: /\.less$/,
      //   include: [resolve('src/assets')],
      //   exclude: /node_modules/,
      //   loader: ExtractTextPlugin.extract({fallback: 'less-loader', use: 'happypack/loader?id=happysass'})
      // }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
    }),
  /*new webpack.DllReferencePlugin({
    context: path.resolve(__dirname, '..'),
    manifest: require('./vendor-manifest.json')
  }),*/
    new HappyPack({
      id: 'happybabel',
      loaders: ['babel-loader?cacheDirectory=true'],
      // threadPool: happyThreadPool,
      cache: true,
      verbose: true
    }),
    createHappyPlugin('happysvg', ['svg-sprite-loader']),
    // createHappyPlugin('happysass', ['css-loader', 'sass-loader']),
    new HappyPack({
      loaders: [{
        path: 'vue-loader',
        query: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            js: 'happypack/loader?id=happybabel'
          }
        }
      }]
    })
  ]
}