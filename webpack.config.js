const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebPackPlugin = require('clean-webpack-plugin')


module.exports = (env, argv) => {
  // Webpack configuration
  let config = {
    entry: {
      index: path.resolve(__dirname, 'assets/static/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'assets/dist'),
      filename: 'js/bundle.js',
      publicPath: ''
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    devtool : 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [ '@babel/preset-env' ]
            ]
          },
        },
        // {
        //   test: /\.(jpg|png|woff|eot|ttf|svg|ico|otf)$/,
        //   use: {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 10000,
        //       name: (absoluteUrl) => {
        //         const urlSplit = absoluteUrl.split('/');
        //         return `${urlSplit[urlSplit.length-2]}/[name].[hash].[ext]`;

        //       }
        //     }
        //   }
        // },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
            'sass-loader',
          ],
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/bundle.css'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  }

  if (argv && argv.mode === 'production') {
    // Clean previous build
    config.plugins.push(
      new CleanWebPackPlugin.CleanWebpackPlugin(),
    )

    // Add css optimizer plugin
    config.plugins.push(
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      }),
    )
  }

  return config
}